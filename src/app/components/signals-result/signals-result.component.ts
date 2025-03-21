import { HttpErrorResponse } from '@angular/common/http';
import { Component, effect, signal } from '@angular/core';
import { finalize } from 'rxjs';
import { IDataset, IPlayer } from '../../models/interfaces';
import { ChartService } from '../../services/chart.service';
import { PlayersService } from '../../services/players.service';
import { ChartComponent } from '../chart/chart.component';
import { ErrorComponent } from '../error/error.component';
import { ExecutionComponent } from '../execution/execution.component';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-signals-result',
  standalone: true,
  imports: [PlayerComponent, ChartComponent, ExecutionComponent, ErrorComponent],
  templateUrl: './signals-result.component.html',
  styleUrl: './signals-result.component.scss',
})
export class SignalsResultComponent {
  public players = signal<IPlayer[]>([]);
  public loading = signal<boolean>(false);
  public error = signal<HttpErrorResponse | null>(null);
  public chartDataSets: IDataset[] = [];
  public startTime!: DOMHighResTimeStamp;
  public totalTime: string = '0';
  public startRendering: boolean = false;
  constructor(
    public playersService: PlayersService,
    private chartService: ChartService,
  ) {
    effect(() => {
      if (this.players().length) {
        this.chartDataSets = this.chartService.createDataSets(this.players());
        this.startRendering = true;
      }
    });
  }

  public click(): void {
    this.startTime = performance.now();
    this.getPlayers();
  }

  private getPlayers(): void {
    this.loading.set(true);
    this.playersService
      .getPlayers()
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (players: IPlayer[]) => this.players.set(players),
        error: (error: HttpErrorResponse) => this.error.set(error),
      });
  }

  ngAfterViewChecked(): void {
    if (this.startRendering) {
      const time = (performance.now() - this.startTime - 250).toFixed(3);
      this.startRendering = false;
      setTimeout(() => {
        this.totalTime = time;
      }, 0);
    }
  }
}

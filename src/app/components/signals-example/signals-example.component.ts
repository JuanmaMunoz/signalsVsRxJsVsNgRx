import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewChecked, Component, effect, inject, signal } from '@angular/core';
import { finalize } from 'rxjs';
import { examples } from '../../info/info';
import { IDataset, IExample, IPlayer } from '../../models/interfaces';
import { ChartService } from '../../services/chart.service';
import { PlayersService } from '../../services/players.service';
import { ChartComponent } from '../chart/chart.component';
import { ErrorComponent } from '../error/error.component';
import { ExampleCodeComponent } from '../example-code/example-code.component';
import { ExampleIntroductionComponent } from '../example-introduction/example-introduction.component';
import { ExecutionComponent } from '../execution/execution.component';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-signals-example',
  imports: [PlayerComponent, ChartComponent, ExecutionComponent, ErrorComponent, ExampleIntroductionComponent, ExampleCodeComponent],
  templateUrl: './signals-example.component.html',
  styleUrl: './signals-example.component.scss',
})
export class SignalsExampleComponent implements AfterViewChecked {
  public players = signal<IPlayer[]>([]);
  public loading = signal<boolean>(false);
  public error = signal<HttpErrorResponse | null>(null);
  public chartDataSets: IDataset[] = [];
  public startTime!: DOMHighResTimeStamp;
  public totalTime = '0';
  public startRendering = false;
  public example: IExample = examples.find((e: IExample) => e.title === 'signal')!;

  private playersService = inject(PlayersService);
  private chartService = inject(ChartService);

  private effect = effect(() => {
    if (this.players().length) {
      this.chartDataSets = this.chartService.createDataSets(this.players());
      this.startRendering = true;
    }
  });

  public getPlayers(): void {
    this.startTime = performance.now();
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

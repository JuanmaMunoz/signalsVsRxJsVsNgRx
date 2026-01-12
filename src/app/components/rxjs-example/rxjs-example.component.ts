import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewChecked, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, finalize } from 'rxjs';
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
  selector: 'app-rxjs-example',
  imports: [
    PlayerComponent,
    ChartComponent,
    CommonModule,
    ExecutionComponent,
    ErrorComponent,
    ExampleIntroductionComponent,
    ExampleCodeComponent,
  ],
  templateUrl: './rxjs-example.component.html',
  styleUrl: './rxjs-example.component.scss',
})
export class RxjsExampleComponent implements AfterViewChecked {
  public chartDataSets: IDataset[] = [];
  public players$ = new BehaviorSubject<IPlayer[]>([]);
  public error$ = new BehaviorSubject<HttpErrorResponse | null>(null);
  public loading$ = new BehaviorSubject<boolean>(false);
  public startTime!: DOMHighResTimeStamp;
  public totalTime = '0';
  public startRendering = false;
  public example: IExample = examples.find((e: IExample) => e.title === 'rxjs')!;
  private playersService = inject(PlayersService);
  private chartService = inject(ChartService);

  private subscription = this.players$.pipe(takeUntilDestroyed()).subscribe((players: IPlayer[]) => {
    if (players.length) {
      this.chartDataSets = this.chartService.createDataSets(players);
      this.startRendering = true;
    }
  });

  ngAfterViewChecked(): void {
    if (this.startRendering) {
      const time = (performance.now() - this.startTime - 250).toFixed(3);
      this.startRendering = false;
      setTimeout(() => {
        this.totalTime = time;
      }, 0);
    }
  }

  public getPlayers(): void {
    this.startTime = performance.now();
    this.loading$.next(true);
    this.playersService
      .getPlayers()
      .pipe(finalize(() => this.loading$.next(false)))
      .subscribe({
        next: (players: IPlayer[]) => this.players$.next(players),
        error: (error: HttpErrorResponse) => this.error$.next(error),
      });
  }
}

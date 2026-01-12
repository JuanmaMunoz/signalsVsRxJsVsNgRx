import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewChecked, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { examples } from '../../info/info';
import { IDataset, IExample, IPlayer } from '../../models/interfaces';
import { ChartService } from '../../services/chart.service';
import { loadPlayers } from '../../store/players.actions';
import { PlayerState } from '../../store/players.reducers';
import { ChartComponent } from '../chart/chart.component';
import { ErrorComponent } from '../error/error.component';
import { ExampleCodeComponent } from '../example-code/example-code.component';
import { ExampleIntroductionComponent } from '../example-introduction/example-introduction.component';
import { ExecutionComponent } from '../execution/execution.component';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-ngrx-example',
  imports: [
    PlayerComponent,
    ChartComponent,
    CommonModule,
    ExecutionComponent,
    ErrorComponent,
    ErrorComponent,
    ExampleIntroductionComponent,
    ExampleCodeComponent,
  ],
  templateUrl: './ngrx-example.component.html',
  styleUrl: './ngrx-example.component.scss',
})
export class NgrxExampleComponent implements AfterViewChecked {
  public chartDataSets: IDataset[] = [];
  public startTime!: DOMHighResTimeStamp;
  public totalTime = '0';
  public startRendering = false;
  public example: IExample = examples.find((e: IExample) => e.title === 'ngrx')!;
  private store = inject(Store<{ players: PlayerState }>);
  private chartService = inject(ChartService);

  public players$: Observable<IPlayer[]> = this.store.select((state) => state.players.players);
  public loading$: Observable<boolean> = this.store.select((state) => state.players.loading);
  public error$: Observable<HttpErrorResponse | null> = this.store.select((state) => state.players.error);

  private subscription = this.players$?.pipe(takeUntilDestroyed()).subscribe((data: IPlayer[]) => {
    if (data.length) {
      this.chartDataSets = this.chartService.createDataSets(data);
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
    this.store.dispatch(loadPlayers());
  }
}

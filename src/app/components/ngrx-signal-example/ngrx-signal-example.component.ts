import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewChecked, Component, effect, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { Store } from '@ngrx/store';
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
  selector: 'app-ngrx-signal-example',
  imports: [
    PlayerComponent,
    ChartComponent,
    ExecutionComponent,
    ErrorComponent,
    ErrorComponent,
    ExampleIntroductionComponent,
    ExampleCodeComponent,
  ],
  templateUrl: './ngrx-signal-example.component.html',
  styleUrl: './ngrx-signal-example.component.scss',
})
export class NgrxSignalExampleComponent implements AfterViewChecked {
  public chartDataSets: IDataset[] = [];
  public startTime!: DOMHighResTimeStamp;
  public totalTime = '0';
  public startRendering = false;
  public example: IExample = examples.find((e: IExample) => e.title === 'ngrxSignal')!;
  private store = inject(Store<{ players: PlayerState }>);
  private chartService = inject(ChartService);

  public players: Signal<IPlayer[]> = toSignal(
    this.store.select((state) => state.players.players),
    { initialValue: [] },
  );

  public loading: Signal<boolean> = toSignal(
    this.store.select((state) => state.players.loading),
    { initialValue: false },
  );

  public error: Signal<HttpErrorResponse | null> = toSignal(
    this.store.select((state) => state.players.error),
    { initialValue: null },
  );

  private effect = effect(() => {
    if (this.players().length) {
      this.chartDataSets = this.chartService.createDataSets(this.players());
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

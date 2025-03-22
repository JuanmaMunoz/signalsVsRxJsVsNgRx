import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewChecked, Component, effect, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { Store } from '@ngrx/store';
import { IDataset, IPlayer } from '../../models/interfaces';
import { ChartService } from '../../services/chart.service';
import { loadPlayers } from '../../store/players.actions';
import { PlayerState } from '../../store/players.reducers';
import { ChartComponent } from '../chart/chart.component';
import { ErrorComponent } from '../error/error.component';
import { ExecutionComponent } from '../execution/execution.component';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-ngrx-signal-result',
  standalone: true,
  imports: [PlayerComponent, ChartComponent, CommonModule, ExecutionComponent, ErrorComponent, ErrorComponent],
  templateUrl: './ngrx-signal-result.component.html',
  styleUrl: './ngrx-signal-result.component.scss',
})
export class NgrxResultSignalComponent implements AfterViewChecked {
  public chartDataSets: IDataset[] = [];
  public players!: Signal<IPlayer[]>;
  public loading!: Signal<boolean>;
  public error!: Signal<HttpErrorResponse | null>;
  public startTime!: DOMHighResTimeStamp;
  public totalTime: string = '0';
  public startRendering: boolean = false;

  constructor(
    private store: Store<{ players: PlayerState }>,
    private chartService: ChartService,
  ) {
    this.players = toSignal(
      this.store.select((state) => state.players.players),
      { initialValue: [] },
    );
    this.loading = toSignal(
      this.store.select((state) => state.players.loading),
      { initialValue: false },
    );
    this.error = toSignal(
      this.store.select((state) => state.players.error),
      { initialValue: null },
    );

    effect(() => {
      if (this.players().length) {
        this.chartDataSets = this.chartService.createDataSets(this.players());
        this.startRendering = true;
      }
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

  public getPlayers(): void {
    this.startTime = performance.now();
    this.store.dispatch(loadPlayers());
  }
}

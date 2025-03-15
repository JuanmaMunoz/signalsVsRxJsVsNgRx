import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IDataset, IPlayer } from '../../models/interfaces';
import { ChartService } from '../../services/chart.service';
import { loadPlayers } from '../../store/players.actions';
import { PlayerState } from '../../store/players.reducers';
import { ButtonsComponent } from '../buttons/buttons.component';
import { ChartComponent } from '../chart/chart.component';
import { ErrorComponent } from '../error/error.component';
import { PlayerComponent } from '../player/player.component';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-ngrx-result',
  standalone: true,
  imports: [PlayerComponent, ChartComponent, CommonModule, ButtonsComponent, SpinnerComponent, ErrorComponent, ErrorComponent],
  templateUrl: './ngrx-result.component.html',
  styleUrl: './ngrx-result.component.scss',
})
export class NgrxResultComponent implements OnInit, OnDestroy, AfterViewChecked {
  public subscription = new Subscription();
  public players$!: Observable<IPlayer[]>;
  public loading$!: Observable<boolean>;
  public error$!: Observable<string | null>;
  public chartDataSets: IDataset[] = [];
  public startTime!: DOMHighResTimeStamp;
  public totalTime: string = '0';
  public startRendering: boolean = false;
  constructor(
    private store: Store<{ players: PlayerState }>,
    private chartService: ChartService,
  ) {
    this.players$ = this.store.select((state) => state.players.players);
    this.loading$ = this.store.select((state) => state.players.loading);
    this.error$ = this.store.select((state) => state.players.error);
  }

  ngOnInit(): void {
    this.subscription.add(
      this.players$.subscribe((data: IPlayer[]) => {
        if (data.length) {
          this.chartDataSets = this.chartService.createDataSets(data);
          this.startRendering = true;
        }
      }),
    );
  }
  ngAfterViewChecked(): void {
    if (this.startRendering) {
      this.totalTime = (performance.now() - this.startTime - 250).toFixed(3);
      this.startRendering = false;
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getPlayers(): void {
    this.startTime = performance.now();
    this.store.dispatch(loadPlayers());
  }
}

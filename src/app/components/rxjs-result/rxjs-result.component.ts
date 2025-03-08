import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IDataset, IPlayer } from '../../models/interfaces';
import { ChartService } from '../../services/chart.service';
import { PlayersService } from '../../services/players.service';
import { ChartComponent } from '../chart/chart.component';
import { PlayerComponent } from './../player/player.component';

@Component({
  selector: 'app-rxjs-result',
  standalone: true,
  imports: [PlayerComponent, ChartComponent, CommonModule],
  templateUrl: './rxjs-result.component.html',
  styleUrl: './rxjs-result.component.scss',
})
export class RxjsResultComponent implements OnInit, OnDestroy {
  public subscription = new Subscription();
  public chartDataSets: IDataset[] = [];
  constructor(
    public playersService: PlayersService,
    private chartService: ChartService,
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.playersService.$players.subscribe((data: IPlayer[]) => {
        if (data.length) this.chartDataSets = this.chartService.createDataSets(data);
      }),
    );
    this.playersService.getPlayersRxJS();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

import { Component } from '@angular/core';
import { IDataset } from '../../models/interfaces';
import { PlayersService } from '../../services/players.service';
import { ChartComponent } from '../chart/chart.component';
import { PlayerComponent } from './../player/player.component';

@Component({
  selector: 'app-rxjs-result',
  standalone: true,
  imports: [PlayerComponent, ChartComponent],
  templateUrl: './rxjs-result.component.html',
  styleUrl: './rxjs-result.component.scss',
})
export class RxjsResultComponent {
  public chartDataSets: IDataset[] = [];
  constructor(public playersService: PlayersService) {}

  ngOnInit(): void {
    this.playersService.getPlayersSignals();
  }
}

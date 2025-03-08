import { Component, effect } from '@angular/core';
import { IDataset } from '../../models/interfaces';
import { ChartService } from '../../services/chart.service';
import { PlayersService } from '../../services/players.service';
import { ChartComponent } from '../chart/chart.component';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-signals-result',
  standalone: true,
  imports: [PlayerComponent, ChartComponent],
  templateUrl: './signals-result.component.html',
  styleUrl: './signals-result.component.scss',
})
export class SignalsResultComponent {
  public chartDataSets: IDataset[] = [];
  constructor(
    public playersService: PlayersService,
    private chartService: ChartService,
  ) {
    effect(() => {
      if (this.playersService.players().length > 0) {
        this.chartDataSets = this.chartService.createDataSets(this.playersService.players());
        console.log(this.chartDataSets);
      }
    });
  }

  ngOnInit(): void {
    this.playersService.getPlayersSignals();
  }
}

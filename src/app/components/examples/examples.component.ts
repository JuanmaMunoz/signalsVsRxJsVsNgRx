import { Component, effect, OnInit } from '@angular/core';
import { examples } from '../../info/info';
import { IExample } from '../../models/interfaces';
import { PlayersService } from '../../services/players.service';
import { ExampleComponent } from '../example/example.component';

@Component({
  selector: 'app-examples',
  standalone: true,
  imports: [ExampleComponent],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.scss',
})
export class ExamplesComponent implements OnInit {
  public examples: IExample[] = examples;
  constructor(public playersService: PlayersService) {
    effect(() => console.log(this.playersService.players()));
  }
  ngOnInit(): void {
    this.playersService.getPlayersSignals();
  }
}

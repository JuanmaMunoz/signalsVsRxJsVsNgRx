import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPlayer } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  public players = signal<IPlayer[]>([]);
  public $players: BehaviorSubject<IPlayer[]> = new BehaviorSubject([] as IPlayer[]);
  constructor(private http: HttpClient) {}

  public getPlayersSignals(): void {
    const url = 'assets/data/players.json';
    this.http.get<IPlayer[]>(url).subscribe((data: IPlayer[]) => this.players.set(data));
  }

  public getPlayersRxJS(): void {
    const url = 'assets/data/players.json';
    this.http.get<IPlayer[]>(url).subscribe((data: IPlayer[]) => this.$players.next(data));
  }
}

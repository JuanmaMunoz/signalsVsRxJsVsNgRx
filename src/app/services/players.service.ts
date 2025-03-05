import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { IPlayer } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  public players = signal<IPlayer[]>([]);
  constructor(private http: HttpClient) {}

  public getPlayersSignals(): void {
    const url = 'assets/data/players.json';
    this.http.get<IPlayer[]>(url).subscribe((data: IPlayer[]) => this.players.set(data));
  }
}

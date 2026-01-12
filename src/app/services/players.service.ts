import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { IPlayer } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private http = inject(HttpClient);

  public getPlayers(): Observable<IPlayer[]> {
    const url = 'assets/data/players.json';
    return this.http.get<IPlayer[]>(url).pipe(delay(250));
  }
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PlayersService } from './../services/players.service';

import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { loadPlayers, loadPlayersFailure, loadPlayersSuccess } from './players.actions';

@Injectable()
export class PlayerEffects {
  constructor(
    private actions$: Actions,
    private playersService: PlayersService,
  ) {}

  loadPlayers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPlayers),
      mergeMap(() =>
        this.playersService.getPlayersNgRx().pipe(
          map((players) => loadPlayersSuccess({ players })),
          catchError((error) => of(loadPlayersFailure({ error: error.message }))),
        ),
      ),
    ),
  );
}

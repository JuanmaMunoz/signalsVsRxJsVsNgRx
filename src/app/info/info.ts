import { IExample } from '../models/interfaces';

export const serviceCode = `export class PlayersService {
  private http = inject(HttpClient);

  public getPlayers(): Observable<IPlayer[]> {
    const url = 'assets/data/players.json';
    return this.http.get<IPlayer[]>(url).pipe(delay(250));
  }
}
`;

export const actionsReducers = `//Actions
export const loadPlayers = createAction('[Player] Load Players');
export const loadPlayersSuccess = createAction('[Player] Load Players Success', props<{ players: IPlayer[] }>());
export const loadPlayersFailure = createAction('[Player] Load Players Failure', props<{ error: HttpErrorResponse }>());

//Reducers
export interface PlayerState {
  players: IPlayer[];
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialState: PlayerState = {
  players: [],
  loading: false,
  error: null,
};

export const playerReducer = createReducer(
  initialState,
  on(loadPlayers, (state) => ({ ...state, loading: true })),
  on(loadPlayersSuccess, (state, { players }) => ({
    ...state,
    loading: false,
    players,
    error: null,
  })),
  on(loadPlayersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
);
`;

export const effects = `export class PlayerEffects {
  private actions$ = inject(Actions);
  private playersService = inject(PlayersService);

  loadPlayers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPlayers),
      mergeMap(() =>
        this.playersService.getPlayers().pipe(
          map((players) => loadPlayersSuccess({ players })),
          catchError((error) => of(loadPlayersFailure({ error: error.message }))),
        ),
      ),
    ),
  );
}`;

export const examples: IExample[] = [
  {
    title: 'signal',
    componentCode: `export class SignalsExampleComponent {
  public chartDataSets: IDataset[] = [];
  public players = signal<IPlayer[]>([]);
  public loading = signal<boolean>(false);
  public error = signal<HttpErrorResponse | null>(null);
  private playersService = inject(PlayersService);
  private chartService = inject(ChartService);

  private effect = effect(() => {
    if (this.players().length) {
      this.chartDataSets = this.chartService.createDataSets(this.players());
    }
  });

  public getPlayers(): void {
    this.loading.set(true);
    this.playersService
      .getPlayers()
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (players: IPlayer[]) => this.players.set(players),
        error: (error: HttpErrorResponse) => this.error.set(error),
      });
  }
}`,
    htmlCode: `<div class="signals-example">
  <app-execution [loading]="loading()" (actionGetPlayers)="getPlayers()" />
  @if (!loading()) {
    @if (error()) {
      <app-error [error]="error()"></app-error>
    } @else {
        <div class="row">
          @for (player of players(); track $index) {
            <div class="col-4 text-center">
              <app-player [player]="player" />
            </div>
          }
          @if (chartDataSets.length) {
            <div class="col-12">
              <app-chart [idChart]="'signals'" [dataSets]="chartDataSets" />
            </div>
          }
        </div>
    }
  }
</div>`,
  },
  {
    title: 'rxjs',
    componentCode: `export class RxjsExampleComponent {
  public chartDataSets: IDataset[] = [];
  public players$ = new BehaviorSubject<IPlayer[]>([]);
  public loading$ = new BehaviorSubject<boolean>(false);
  public error$ = new BehaviorSubject<HttpErrorResponse | null>(null);
  private playersService = inject(PlayersService);
  private chartService = inject(ChartService);

  private subscription = this.players$.pipe(takeUntilDestroyed())
    .subscribe((players: IPlayer[]) => {
      if (players.length) {
        this.chartDataSets = this.chartService.createDataSets(players);
      }
  });

  public getPlayers(): void {
    this.loading$.next(true);
    this.playersService
      .getPlayers()
      .pipe(finalize(() => this.loading$.next(false)))
      .subscribe({
        next: (players: IPlayer[]) => this.players$.next(players),
        error: (error: HttpErrorResponse) => this.error$.next(error),
      });
  }
}
`,
    htmlCode: `<div class="rxjs-example">
  <app-execution [loading]="loading$ | async" (actionGetPlayers)="getPlayers()" />
  @if ((loading$ | async) === false) {
    @if (error$ | async) {
        <app-error [error]="error$ | async"></app-error>
    } @else {
        <div class="row">
          @for (player of players$ | async; track $index) {
            <div class="col-md-4 text-center">
              <app-player [player]="player" />
            </div>
          }
          @if (chartDataSets.length) {
            <div class="col-12">
              <app-chart [idChart]="'rxjs'" [dataSets]="chartDataSets" />
            </div>
          }
        </div>
    }
  }
</div>`,
  },
  {
    title: 'ngrx',
    componentCode: `export class NgrxExampleComponent implements {
  public chartDataSets: IDataset[] = [];
  public players$: Observable<IPlayer[]> = this.store.select((state) => state.players.players);
  public loading$: Observable<boolean> = this.store.select((state) => state.players.loading);
  public error$: Observable<HttpErrorResponse | null> = this.store.select((state) => state.players.error);
  private store = inject(Store<{ players: PlayerState }>);
  private chartService = inject(ChartService);

  private subscription = this.players$.pipe(takeUntilDestroyed())
    .subscribe((data: IPlayer[]) => {
      if (data.length) {
        this.chartDataSets = this.chartService.createDataSets(data);
      }
  });

  public getPlayers(): void {
    this.store.dispatch(loadPlayers());
  }
}`,
    htmlCode: `<div class="ngrx-example">
  <app-execution [loading]="loading$ | async" (actionGetPlayers)="getPlayers()" />
  @if ((loading$ | async) === false) {
    @if (error$ | async) {
       <app-error [error]="error$ | async"></app-error>
    } @else {
        <div class="row">
          @for (player of players$ | async; track $index) {
            <div class="col-md-4 text-center">
              <app-player [player]="player" />
            </div>
          }
          @if (chartDataSets.length) {
            <div class="col-12">
              <app-chart [idChart]="'ngrx'" [dataSets]="chartDataSets" />
            </div>
          }
        </div>
    }
  }
</div>`,
  },
  {
    title: 'ngrxSignal',
    componentCode: `export class NgrxSignalExampleComponent {
  public chartDataSets: IDataset[] = [];
  public players: Signal<IPlayer[]> = toSignal(
    this.store.select((state) => state.players.players),
    { initialValue: [] },
  );
  public loading: Signal<boolean> = toSignal(
    this.store.select((state) => state.players.loading),
    { initialValue: false },
  );
  public error: Signal<HttpErrorResponse | null> = toSignal(
    this.store.select((state) => state.players.error),
    { initialValue: null },
  );
  private store = inject(Store<{ players: PlayerState }>);
  private chartService = inject(ChartService);

  private effect = effect(() => {
    if (this.players().length) {
      this.chartDataSets = this.chartService.createDataSets(this.players());
      this.startRendering = true;
    }
  });

  public getPlayers(): void {
    this.store.dispatch(loadPlayers());
  }
}`,
    htmlCode: `<div class="rxjs-signal-example">
  <app-execution [loading]="loading()" (actionGetPlayers)="getPlayers()" />
  @if (!loading()) {
    @if (error()) {
      <app-error [error]="error()"></app-error>
    } @else {
      <div class="row">
        @for (player of players(); track $index) {
          <div class="col-md-4 text-center">
            <app-player [player]="player" />
          </div>
        }
        @if (chartDataSets.length) {
          <div class="col-12">
            <app-chart [idChart]="'ngrxSignal'" [dataSets]="chartDataSets" />
          </div>
        }
      </div>
    }
  }
</div>`,
  },
];

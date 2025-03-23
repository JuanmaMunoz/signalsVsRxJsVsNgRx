import { IExample } from '../models/interfaces';

export const serviceCode: string = `export class PlayersService {
  public players = signal<IPlayer[]>([]);

  constructor(private http: HttpClient) {}
      
  public getPlayers(): void {
      const url = 'assets/data/players.json';
      this.http.get<IPlayer[]>(url).subscribe((data: IPlayer[]) => this.players.set(data));
  }
}
`;

export const examples: IExample[] = [
  {
    title: 'signal',
    componentCode: `export class SignalsExampleComponent {
  public players = signal<IPlayer[]>([]);
  public loading = signal<boolean>(false);
  public error = signal<HttpErrorResponse | null>(null);
  public chartDataSets: IDataset[] = [];
  
  constructor(public playersService: PlayersService, private chartService: ChartService) {
    effect(() => {
      if (this.players().length) 
        this.chartDataSets = this.chartService.createDataSets(this.players());
    });
  }

  public click(): void {
    this.getPlayers();
  }

  private getPlayers(): void {
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
  <app-execution [loading]="loading()" (actionGetPlayers)="click()" />
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
    componentCode: `export class RxjsExampleComponent implements OnInit, OnDestroy {
  public chartDataSets: IDataset[] = [];
  public players$: BehaviorSubject<IPlayer[]> = new BehaviorSubject([] as IPlayer[]);
  public error$: BehaviorSubject<HttpErrorResponse | null> = new BehaviorSubject<HttpErrorResponse | null>(null);
  public loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private subscription = new Subscription();

  constructor(public playersService: PlayersService, private chartService: ChartService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.players$.subscribe((players: IPlayer[]) => {
        if (players.length) 
          this.chartDataSets = this.chartService.createDataSets(players);
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public click(): void {
    this.getPlayers();
  }

  private getPlayers(): void {
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
  <app-execution [loading]="loading$ | async" (actionGetPlayers)="click()" />
  @if (!(loading$ | async)) {
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
    componentCode: `export class NgrxResultComponent implements OnInit, OnDestroy, AfterViewChecked {
  public chartDataSets: IDataset[] = [];
  public players$!: Observable<IPlayer[]>;
  public loading$!: Observable<boolean>;
  public error$!: Observable<string | null>;
  private subscription = new Subscription();

  constructor(private store: Store<{ players: PlayerState }>,private chartService: ChartService) {
    this.players$ = this.store.select((state) => state.players.players);
    this.loading$ = this.store.select((state) => state.players.loading);
    this.error$ = this.store.select((state) => state.players.error);
  }

  ngOnInit(): void {
    this.subscription.add(
      this.players$.subscribe((data: IPlayer[]) => {
        if (data.length)
          this.chartDataSets = this.chartService.createDataSets(data);
      }),
    );
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getPlayers(): void {
    this.store.dispatch(loadPlayers());
  }
}`,
    htmlCode: `<div class="rxjs-result">
  <app-execution [loading]="loading$ | async" (actionGetPlayers)="getPlayers()" />
  @if (!(loading$ | async)) {
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
    componentCode: `export class NgrxResultComponent implements OnInit, OnDestroy, AfterViewChecked {
  public chartDataSets: IDataset[] = [];
  public players$!: Observable<IPlayer[]>;
  public loading$!: Observable<boolean>;
  public error$!: Observable<string | null>;
  private subscription = new Subscription();

  constructor(private store: Store<{ players: PlayerState }>,private chartService: ChartService) {
    this.players$ = this.store.select((state) => state.players.players);
    this.loading$ = this.store.select((state) => state.players.loading);
    this.error$ = this.store.select((state) => state.players.error);
  }

  ngOnInit(): void {
    this.subscription.add(
      this.players$.subscribe((data: IPlayer[]) => {
        if (data.length)
          this.chartDataSets = this.chartService.createDataSets(data);
      }),
    );
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getPlayers(): void {
    this.store.dispatch(loadPlayers());
  }
}`,
    htmlCode: `<div class="rxjs-result">
  <app-execution [loading]="loading$ | async" (actionGetPlayers)="getPlayers()" />
  @if (!(loading$ | async)) {
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
];

import { IExample } from '../models/interfaces';

export const examples: IExample[] = [
  {
    title: 'signal',
    serviceCode: `export class PlayersService {
    public players = signal<IPlayer[]>([]);
    constructor(private http: HttpClient) {}
        
    public getPlayers(): void {
        const url = 'assets/data/players.json';
        this.http.get<IPlayer[]>(url)
            .subscribe((data: IPlayer[]) => this.players.set(data));
    }
}
`,
    componentCode: `export class ExamplesComponent implements OnInit {
    public chartDataSets: IDataset[] = [];
    constructor(
        public playersService: PlayersService, 
        private chartService: ChartService,
    ) {
        effect(() => {
          if (this.playersService.players().length > 0) {
            this.chartDataSets = this.chartService.createDataSets(this.playersService.players());
          }
        });
    }
    ngOnInit(): void {
        this.playersService.getPlayersSignals();
    }
}`,
    htmlCode: `<div class="row">
    @for (player of playersService.players(); track $index) {
        <div class="col-4 text-center">
            <app-player [player]="player" />
        </div>
    }
    @if (chartDataSets.length) {
      <div class="col-12">
        <app-chart [dataSets]="chartDataSets" />
      </div>
    }
</div>`,
  },
];

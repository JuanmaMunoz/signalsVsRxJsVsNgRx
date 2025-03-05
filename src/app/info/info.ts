import { IExample } from '../models/interfaces';

export const examples: IExample[] = [
  {
    title: 'Signal',
    serviceCode: `export class PlayersService {
    public players = signal<IPlayer[]>([]);
    constructor(private http: HttpClient) {}
        
    public getPlayersSignals(): void {
        const url = 'assets/data/players.json';
        this.http.get<IPlayer[]>(url)
            .subscribe((data: IPlayer[]) => this.players.set(data));
    }
}
`,
    componentCode: `export class ExamplesComponent implements OnInit {
    constructor(public playersService: PlayersService) {
        effect(() => console.log(this.playersService.players()));
    }
    ngOnInit(): void {
        this.playersService.getPlayersSignals();
    }
}          `,
    htmlCode: `<div class="example">
    <h2>{{ example.title }}</h2>
    @if(example.configCode){
        <app-code [code]="example.configCode" [title]="'Service'" />
    }
    <app-code [code]="example.serviceCode" [title]="'Service'" />
    <app-code [code]="example.componentCode" [title]="'Component'" />
    <app-code [code]="example.htmlCode" [title]="'Html'" />
</div>`,
  },
];

import{J as ne,Oa as de,Ob as M,Pb as D,Qb as U,R as se,S as oe,Sb as pe,X as ie,Z as ae,_ as A,a as p,b as S,ba as f,e as g,ea as a,fa as l,ga as c,h as X,ha as ce,i as j,ia as T,k as ee,m as te,pa as b,ra as I,t as re,ua as k,xa as ue,za as le}from"./chunk-LZ6BWE2T.js";function kt(e){e||(e=c(I));let t=new g(s=>{if(e.destroyed){s.next();return}return e.onDestroy(s.next.bind(s))});return s=>s.pipe(ie(t))}function fe(e,t){let r=!t?.manualCleanup?t?.injector?.get(I)??c(I):null,n=Me(t?.equal),o;t?.requireSync?o=k({kind:0},{equal:n}):o=k({kind:1,value:t?.initialValue},{equal:n});let i,d=e.subscribe({next:u=>o.set({kind:1,value:u}),error:u=>{o.set({kind:2,error:u}),i?.()},complete:()=>{i?.()}});if(t?.requireSync&&o().kind===0)throw new A(601,!1);return i=r?.onDestroy(d.unsubscribe.bind(d)),D(()=>{let u=o();switch(u.kind){case 1:return u.value;case 2:throw u.error;case 0:throw new A(601,!1)}},{equal:t?.equal})}function Me(e=Object.is){return(t,s)=>t.kind===1&&s.kind===1&&e(t.value,s.value)}var N={};function E(e,t){if(N[e]=(N[e]||0)+1,typeof t=="function")return $(e,(...r)=>S(p({},t(...r)),{type:e}));switch(t?t._as:"empty"){case"empty":return $(e,()=>({type:e}));case"props":return $(e,r=>S(p({},r),{type:e}));default:throw new Error("Unexpected config.")}}function H(){return{_as:"props",_p:void 0}}function $(e,t){return Object.defineProperty(t,"type",{value:e,writable:!1})}function $e(e,t){if(e==null)throw new Error(`${t} must be defined.`)}var De="@ngrx/store/init",m=(()=>{let t=class t extends j{constructor(){super({type:De})}next(r){if(typeof r=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof r>"u")throw new TypeError("Actions must be objects");if(typeof r.type>"u")throw new TypeError("Actions must have a type property");super.next(r)}complete(){}ngOnDestroy(){super.complete()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=f({token:t,factory:t.\u0275fac});let e=t;return e})(),_e=[m],Ce=new a("@ngrx/store Internal Root Guard"),ye=new a("@ngrx/store Internal Initial State"),G=new a("@ngrx/store Initial State"),we=new a("@ngrx/store Reducer Factory"),he=new a("@ngrx/store Internal Reducer Factory Provider"),Pe=new a("@ngrx/store Initial Reducers"),_=new a("@ngrx/store Internal Initial Reducers");var ve=new a("@ngrx/store Internal Store Reducers");var Ne=new a("@ngrx/store Internal Store Features");var ze=new a("@ngrx/store Feature Reducers"),ge=new a("@ngrx/store User Provided Meta Reducers"),C=new a("@ngrx/store Meta Reducers"),me=new a("@ngrx/store Internal Resolved Meta Reducers"),Se=new a("@ngrx/store User Runtime Checks Config"),be=new a("@ngrx/store Internal User Runtime Checks Config"),R=new a("@ngrx/store Internal Runtime Checks"),K=new a("@ngrx/store Check if Action types are unique"),z=new a("@ngrx/store Root Store Provider"),Re=new a("@ngrx/store Feature State Provider");function Ve(e,t={}){let s=Object.keys(e),r={};for(let o=0;o<s.length;o++){let i=s[o];typeof e[i]=="function"&&(r[i]=e[i])}let n=Object.keys(r);return function(i,d){i=i===void 0?t:i;let u=!1,y={};for(let h=0;h<n.length;h++){let v=n[h],O=r[v],W=i[v],J=O(W,d);y[v]=J,u=u||J!==W}return u?y:i}}function qe(e,t){return Object.keys(e).filter(s=>s!==t).reduce((s,r)=>Object.assign(s,{[r]:e[r]}),{})}function Fe(...e){return function(t){if(e.length===0)return t;let s=e[e.length-1];return e.slice(0,-1).reduceRight((n,o)=>o(n),s(t))}}function Oe(e,t){return Array.isArray(t)&&t.length>0&&(e=Fe.apply(null,[...t,e])),(s,r)=>{let n=e(s);return(o,i)=>(o=o===void 0?r:o,n(o,i))}}function Le(e){let t=Array.isArray(e)&&e.length>0?Fe(...e):s=>s;return(s,r)=>(s=t(s),(n,o)=>(n=n===void 0?r:n,s(n,o)))}var x=class extends g{},w=class extends m{},He="@ngrx/store/update-reducers",P=(()=>{let t=class t extends j{get currentReducers(){return this.reducers}constructor(r,n,o,i){super(i(o,n)),this.dispatcher=r,this.initialState=n,this.reducers=o,this.reducerFactory=i}addFeature(r){this.addFeatures([r])}addFeatures(r){let n=r.reduce((o,{reducers:i,reducerFactory:d,metaReducers:u,initialState:y,key:h})=>{let v=typeof i=="function"?Le(u)(i,y):Oe(d,u)(i,y);return o[h]=v,o},{});this.addReducers(n)}removeFeature(r){this.removeFeatures([r])}removeFeatures(r){this.removeReducers(r.map(n=>n.key))}addReducer(r,n){this.addReducers({[r]:n})}addReducers(r){this.reducers=p(p({},this.reducers),r),this.updateReducers(Object.keys(r))}removeReducer(r){this.removeReducers([r])}removeReducers(r){r.forEach(n=>{this.reducers=qe(this.reducers,n)}),this.updateReducers(r)}updateReducers(r){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:He,features:r})}ngOnDestroy(){this.complete()}};t.\u0275fac=function(n){return new(n||t)(l(w),l(G),l(Pe),l(we))},t.\u0275prov=f({token:t,factory:t.\u0275fac});let e=t;return e})(),Ge=[P,{provide:x,useExisting:P},{provide:w,useExisting:m}],B=(()=>{let t=class t extends X{ngOnDestroy(){this.complete()}};t.\u0275fac=(()=>{let r;return function(o){return(r||(r=le(t)))(o||t)}})(),t.\u0275prov=f({token:t,factory:t.\u0275fac});let e=t;return e})(),Ke=[B],F=class extends g{},xe=(()=>{let t=class t extends j{constructor(r,n,o,i){super(i);let u=r.pipe(te(ee)).pipe(ae(n)),y={state:i},h=u.pipe(oe(Be,y));this.stateSubscription=h.subscribe(({state:v,action:O})=>{this.next(v),o.next(O)}),this.state=fe(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}};t.INIT=De,t.\u0275fac=function(n){return new(n||t)(l(m),l(x),l(B),l(G))},t.\u0275prov=f({token:t,factory:t.\u0275fac});let e=t;return e})();function Be(e={state:void 0},[t,s]){let{state:r}=e;return{state:s(r,t),action:t}}var Ze=[xe,{provide:F,useExisting:xe}],Z=(()=>{let t=class t extends g{constructor(r,n,o,i){super(),this.actionsObserver=n,this.reducerManager=o,this.injector=i,this.source=r,this.state=r.state}select(r,...n){return Qe.call(null,r,...n)(this)}selectSignal(r,n){return D(()=>r(this.state()),n)}lift(r){let n=new t(this,this.actionsObserver,this.reducerManager);return n.operator=r,n}dispatch(r,n){if(typeof r=="function")return this.processDispatchFn(r,n);this.actionsObserver.next(r)}next(r){this.actionsObserver.next(r)}error(r){this.actionsObserver.error(r)}complete(){this.actionsObserver.complete()}addReducer(r,n){this.reducerManager.addReducer(r,n)}removeReducer(r){this.reducerManager.removeReducer(r)}processDispatchFn(r,n){$e(this.injector,"Store Injector");let o=n?.injector??We()??this.injector;return U(()=>{let i=r();M(()=>this.dispatch(i))},{injector:o})}};t.\u0275fac=function(n){return new(n||t)(l(F),l(m),l(P),l(b))},t.\u0275prov=f({token:t,factory:t.\u0275fac});let e=t;return e})(),Ye=[Z];function Qe(e,t,...s){return function(n){let o;if(typeof e=="string"){let i=[t,...s].filter(Boolean);o=n.pipe(se(e,...i))}else if(typeof e=="function")o=n.pipe(re(i=>e(i,t)));else throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`);return o.pipe(ne())}}function We(){try{return c(b)}catch{return}}var Y="https://ngrx.io/guide/store/configuration/runtime-checks";function Ee(e){return e===void 0}function je(e){return e===null}function Ae(e){return Array.isArray(e)}function Je(e){return typeof e=="string"}function Xe(e){return typeof e=="boolean"}function et(e){return typeof e=="number"}function Te(e){return typeof e=="object"&&e!==null}function tt(e){return Te(e)&&!Ae(e)}function rt(e){if(!tt(e))return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function V(e){return typeof e=="function"}function nt(e){return V(e)&&e.hasOwnProperty("\u0275cmp")}function st(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ot(e){return e instanceof a?c(e):e}function ke(e){return typeof e=="function"?e():e}function it(e,t){return e.concat(t)}function at(){if(c(Z,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function ct(e,t){return function(s,r){let n=t.action(r)?q(r):r,o=e(s,n);return t.state()?q(o):o}}function q(e){Object.freeze(e);let t=V(e);return Object.getOwnPropertyNames(e).forEach(s=>{if(!s.startsWith("\u0275")&&st(e,s)&&(!t||s!=="caller"&&s!=="callee"&&s!=="arguments")){let r=e[s];(Te(r)||V(r))&&!Object.isFrozen(r)&&q(r)}}),e}function ut(e,t){return function(s,r){if(t.action(r)){let o=L(r);Ie(o,"action")}let n=e(s,r);if(t.state()){let o=L(n);Ie(o,"state")}return n}}function L(e,t=[]){return(Ee(e)||je(e))&&t.length===0?{path:["root"],value:e}:Object.keys(e).reduce((r,n)=>{if(r)return r;let o=e[n];return nt(o)?r:Ee(o)||je(o)||et(o)||Xe(o)||Je(o)||Ae(o)?!1:rt(o)?L(o,[...t,n]):{path:[...t,n],value:o}},!1)}function Ie(e,t){if(e===!1)return;let s=e.path.join("."),r=new Error(`Detected unserializable ${t} at "${s}". ${Y}#strict${t}serializability`);throw r.value=e.value,r.unserializablePath=s,r}function lt(e,t){return function(s,r){if(t.action(r)&&!de.isInAngularZone())throw new Error(`Action '${r.type}' running outside NgZone. ${Y}#strictactionwithinngzone`);return e(s,r)}}function dt(e){return pe()?p({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},e):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function pt({strictActionSerializability:e,strictStateSerializability:t}){return s=>e||t?ut(s,{action:r=>e&&!Q(r),state:()=>t}):s}function ft({strictActionImmutability:e,strictStateImmutability:t}){return s=>e||t?ct(s,{action:r=>e&&!Q(r),state:()=>t}):s}function Q(e){return e.type.startsWith("@ngrx")}function yt({strictActionWithinNgZone:e}){return t=>e?lt(t,{action:s=>e&&!Q(s)}):t}function ht(e){return[{provide:be,useValue:e},{provide:Se,useFactory:gt,deps:[be]},{provide:R,deps:[Se],useFactory:dt},{provide:C,multi:!0,deps:[R],useFactory:ft},{provide:C,multi:!0,deps:[R],useFactory:pt},{provide:C,multi:!0,deps:[R],useFactory:yt}]}function vt(){return[{provide:K,multi:!0,deps:[R],useFactory:mt}]}function gt(e){return e}function mt(e){if(!e.strictActionTypeUniqueness)return;let t=Object.entries(N).filter(([,s])=>s>1).map(([s])=>s);if(t.length)throw new Error(`Action types are registered more than once, ${t.map(s=>`"${s}"`).join(", ")}. ${Y}#strictactiontypeuniqueness`)}function St(e={},t={}){return[{provide:Ce,useFactory:at},{provide:ye,useValue:t.initialState},{provide:G,useFactory:ke,deps:[ye]},{provide:_,useValue:e},{provide:ve,useExisting:e instanceof a?e:_},{provide:Pe,deps:[_,[new ue(ve)]],useFactory:ot},{provide:ge,useValue:t.metaReducers?t.metaReducers:[]},{provide:me,deps:[C,ge],useFactory:it},{provide:he,useValue:t.reducerFactory?t.reducerFactory:Ve},{provide:we,deps:[he,me],useFactory:Oe},_e,Ge,Ke,Ze,Ye,ht(t.runtimeChecks),vt()]}function bt(){c(m),c(x),c(B),c(Z),c(Ce,{optional:!0}),c(K,{optional:!0})}var Rt=[{provide:z,useFactory:bt},T(()=>c(z))];function Kt(e,t){return ce([...St(e,t),Rt])}function xt(){c(z);let e=c(Ne),t=c(ze),s=c(P);c(K,{optional:!0});let r=e.map((n,o)=>{let d=t.shift()[o];return S(p({},n),{reducers:d,initialState:ke(n.initialState)})});s.addFeatures(r)}var Bt=[{provide:Re,useFactory:xt},T(()=>c(Re))];function Zt(...e){let t=e.pop(),s=e.map(r=>r.type);return{reducer:t,types:s}}function Yt(e,...t){let s=new Map;for(let r of t)for(let n of r.types){let o=s.get(n);if(o){let i=(d,u)=>r.reducer(o(d,u),u);s.set(n,i)}else s.set(n,r.reducer)}return function(r=e,n){let o=s.get(n.type);return o?o(r,n):r}}var Xt=E("[Player] Load Players"),er=E("[Player] Load Players Success",H()),tr=E("[Player] Load Players Failure",H()),rr=E("[Player] Set initial state");var sr=`export class PlayersService {
  private http = inject(HttpClient);

  public getPlayers(): Observable<IPlayer[]> {
    const url = 'assets/data/players.json';
    return this.http.get<IPlayer[]>(url).pipe(delay(250));
  }
}
`,or=`//Actions
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
`,ir=`export class PlayerEffects {
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
}`,ar=[{title:"signal",componentCode:`export class SignalsExampleComponent {
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
}`,htmlCode:`<div class="signals-example">
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
</div>`},{title:"rxjs",componentCode:`export class RxjsExampleComponent {
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
`,htmlCode:`<div class="rxjs-example">
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
</div>`},{title:"ngrx",componentCode:`export class NgrxExampleComponent implements {
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
}`,htmlCode:`<div class="ngrx-example">
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
</div>`},{title:"ngrxSignal",componentCode:`export class NgrxSignalExampleComponent {
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
}`,htmlCode:`<div class="rxjs-signal-example">
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
</div>`}];var ur=(()=>{let t=class t{constructor(){this.isNgRxSignals=!1}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=f({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{kt as a,fe as b,E as c,De as d,m as e,G as f,z as g,Re as h,x as i,w as j,He as k,B as l,F as m,Z as n,Kt as o,Zt as p,Yt as q,Xt as r,er as s,tr as t,rr as u,sr as v,or as w,ir as x,ar as y,ur as z};

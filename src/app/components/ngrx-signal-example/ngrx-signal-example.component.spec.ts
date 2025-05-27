import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IPlayer } from './../../models/interfaces';

import { HttpErrorResponse } from '@angular/common/http';
import { signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { mockDatset, mockPlayers } from '../../info/into_tests';
import { ChartService } from '../../services/chart.service';
import { loadPlayers } from '../../store/players.actions';
import { NgrxSignalExampleComponent } from './ngrx-signal-example.component';

describe('NgrxSignalExampleComponent', () => {
  let component: NgrxSignalExampleComponent;
  let fixture: ComponentFixture<NgrxSignalExampleComponent>;
  let storeSpy = jasmine.createSpyObj('Store', ['select', 'dispatch']);
  let chartServiceSpy = jasmine.createSpyObj('ChartService', ['createDataSets']);

  beforeEach(async () => {
    (window as any).Prism = {
      highlightAll: jasmine.createSpy('highlightAll'),
    };

    storeSpy.select.and.callFake((selectorFn: any) => {
      const fakeState = {
        players: {
          players: [],
          loading: false,
          error: null,
        },
      };
      return of(selectorFn(fakeState));
    });

    await TestBed.configureTestingModule({
      imports: [NgrxSignalExampleComponent, TranslateModule.forRoot()],
      providers: [
        { provide: Store, useValue: storeSpy },
        { provide: ChartService, useValue: chartServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NgrxSignalExampleComponent);
    component = fixture.componentInstance;
    storeSpy = TestBed.inject(Store) as jasmine.SpyObj<Store<any>>;
    chartServiceSpy = TestBed.inject(ChartService) as jasmine.SpyObj<ChartService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to have introduciontion and code components', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const introduction = compiled.querySelector('app-example-introduction');
    const example = compiled.querySelector('app-example-code');
    expect(introduction).toBeTruthy();
    expect(example).toBeTruthy();
  });

  it('should to show error component', () => {
    const error: HttpErrorResponse = { error: { code: 500, message: 'Error Server' } } as HttpErrorResponse;
    component.players = signal<IPlayer[]>([]);
    component.loading = signal<boolean>(false);
    component.error = signal<HttpErrorResponse>(error);
    component.getPlayers();

    expect(storeSpy.dispatch).toHaveBeenCalledWith(loadPlayers());
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const errorComponent = compiled.querySelector('app-error');
    expect(errorComponent).toBeTruthy();
  });

  it('should to be loading', () => {
    component.players = signal<IPlayer[]>([]);
    component.loading = signal<boolean>(true);
    component.error = signal<null>(null);
    component.getPlayers();

    expect(storeSpy.dispatch).toHaveBeenCalledWith(loadPlayers());
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const playersComponent = compiled.querySelectorAll('app-player');
    const chartComponent = compiled.querySelector('app-chart');
    expect(playersComponent.length).toBe(0);
    expect(chartComponent).toBeFalsy();
  });

  it('should dispatch loadPlayers and load chartDataSets when getPlayers is called', () => {
    component.players = signal<IPlayer[]>(mockPlayers);
    component.loading = signal<boolean>(false);
    component.error = signal<null>(null);

    chartServiceSpy.createDataSets.and.returnValue(mockDatset);

    component.getPlayers();
    fixture.detectChanges();
    expect(storeSpy.dispatch).toHaveBeenCalledWith(loadPlayers());
    expect(chartServiceSpy.createDataSets).toHaveBeenCalledWith(mockPlayers);
    expect(component.chartDataSets).toEqual(mockDatset);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const playersComponent = compiled.querySelectorAll('app-player');
    const chartComponent = compiled.querySelector('app-chart');
    expect(playersComponent.length).toBe(3);
    expect(chartComponent).toBeTruthy();
  });
});

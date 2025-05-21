import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartService } from './../../services/chart.service';

import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject, of } from 'rxjs';
import { mockDatset, mockPlayers } from '../../info/into_tests';
import { loadPlayers } from '../../store/players.actions';
import { NgrxExampleComponent } from './ngrx-example.component';

describe('NgrxExampleComponent', () => {
  let component: NgrxExampleComponent;
  let fixture: ComponentFixture<NgrxExampleComponent>;
  let storeSpy = jasmine.createSpyObj('Store', ['select', 'dispatch']);
  let chartServiceSpy = jasmine.createSpyObj('ChartService', ['createDataSets']);

  beforeEach(async () => {
    (window as any).Prism = {
      highlightAll: jasmine.createSpy('highlightAll'),
    };

    await TestBed.configureTestingModule({
      imports: [NgrxExampleComponent, TranslateModule.forRoot()],
      providers: [
        { provide: Store, useValue: storeSpy },
        { provide: ChartService, useValue: chartServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NgrxExampleComponent);
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
    component.players$ = new BehaviorSubject([]);
    component.loading$ = new BehaviorSubject(false);
    component.error$ = new BehaviorSubject(error);

    component.ngOnInit();
    component.getPlayers();

    expect(storeSpy.dispatch).toHaveBeenCalledWith(loadPlayers());
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const errorComponent = compiled.querySelector('app-error');
    expect(errorComponent).toBeTruthy();
  });

  it('should to be loading', () => {
    component.players$ = new BehaviorSubject([]);
    component.loading$ = new BehaviorSubject(true);
    component.error$ = new BehaviorSubject(null);

    component.ngOnInit();
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
    //This code is to cover the constructor´s code
    //----------------------------------------
    storeSpy.select.and.callFake((selectorFn: any) => {
      const fakeState = {
        players: {
          players: [mockPlayers],
          loading: false,
          error: null,
        },
      };
      return of(selectorFn(fakeState));
    });
    //----------------------------------------
    component.players$ = new BehaviorSubject(mockPlayers);
    component.loading$ = new BehaviorSubject(false);
    component.error$ = new BehaviorSubject(null);

    chartServiceSpy.createDataSets.and.returnValue(mockDatset);

    component.ngOnInit();
    component.getPlayers();

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

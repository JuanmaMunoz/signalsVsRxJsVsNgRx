import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartService } from './../../services/chart.service';

import { HttpErrorResponse } from '@angular/common/http';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { mockDatset, mockPlayers } from '../../info/into_tests';
import { loadPlayers } from '../../store/players.actions';
import { PlayerState } from '../../store/players.reducers';
import { NgrxExampleComponent } from './ngrx-example.component';

describe('NgrxExampleComponent', () => {
  let component: NgrxExampleComponent;
  let fixture: ComponentFixture<NgrxExampleComponent>;
  let store: MockStore;
  let dispatchSpy: jasmine.Spy;
  const initialState: PlayerState = {
    players: [],
    loading: false,
    error: null,
  };
  let chartServiceSpy = jasmine.createSpyObj('ChartService', ['createDataSets']);
  interface WindowWithPrism extends Window {
    Prism: {
      highlightAll: jasmine.Spy;
    };
  }

  beforeEach(async () => {
    (window as unknown as WindowWithPrism).Prism = {
      highlightAll: jasmine.createSpy('highlightAll'),
    };

    await TestBed.configureTestingModule({
      imports: [NgrxExampleComponent, TranslateModule.forRoot()],
      providers: [provideMockStore({ initialState }), { provide: ChartService, useValue: chartServiceSpy }],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    dispatchSpy = spyOn(store, 'dispatch');
    fixture = TestBed.createComponent(NgrxExampleComponent);
    component = fixture.componentInstance;
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
    store.setState({
      players: {
        loading: false,
        error,
        players: [],
      },
    });
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const errorComponent = compiled.querySelector('app-error');
    expect(errorComponent).toBeTruthy();
  });

  it('should to be loading', () => {
    store.setState({
      players: {
        loading: true,
        error: null,
        players: [],
      },
    });
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-player').length).toBe(0);
    expect(compiled.querySelector('app-chart')).toBeFalsy();
  });

  it('should call chatService and load players', () => {
    chartServiceSpy.createDataSets.and.returnValue(mockDatset);
    store.setState({
      players: {
        loading: false,
        error: null,
        players: mockPlayers,
      },
    });

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(chartServiceSpy.createDataSets).toHaveBeenCalled();
    expect(compiled.querySelectorAll('app-player').length).toBe(3);
    expect(compiled.querySelector('app-chart')).toBeTruthy();
  });

  it('should dispatch loadPlayers and load chartDataSets when getPlayers is called', () => {
    component.getPlayers();
    expect(dispatchSpy).toHaveBeenCalledWith(loadPlayers());
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayersService } from './../../services/players.service';

import { HttpErrorResponse } from '@angular/common/http';
import { signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { of, throwError } from 'rxjs';
import { mockDatset, mockPlayers } from '../../info/into_tests';
import { ChartService } from '../../services/chart.service';
import { SignalsExampleComponent } from './signals-example.component';

describe('SignalsExampleComponent', () => {
  let component: SignalsExampleComponent;
  let fixture: ComponentFixture<SignalsExampleComponent>;
  let playersServiceSpy: jasmine.SpyObj<PlayersService>;
  let chartServiceSpy: jasmine.SpyObj<ChartService>;

  beforeEach(async () => {
    playersServiceSpy = jasmine.createSpyObj('PlayersService', ['getPlayers']);
    chartServiceSpy = jasmine.createSpyObj('ChartService', ['createDataSets']);
    const storeSpy = jasmine.createSpyObj('Store', ['select', 'dispatch']);

    await TestBed.configureTestingModule({
      imports: [SignalsExampleComponent, TranslateModule.forRoot()],
      providers: [
        { provide: ChartService, useValue: chartServiceSpy },
        { provide: PlayersService, useValue: playersServiceSpy },
        { provide: Store, useValue: storeSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
    playersServiceSpy.getPlayers.and.returnValue(
      throwError(() => new HttpErrorResponse({ error: { code: 500, message: 'Error Server' } })),
    );

    component.getPlayers();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const errorComponent = compiled.querySelector('app-error');
    expect(errorComponent).toBeTruthy();
  });

  it('should to be loading', () => {
    component.loading = signal(true);
    playersServiceSpy.getPlayers.and.returnValue(of([]));
    component.getPlayers();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const playersComponent = compiled.querySelectorAll('app-player');
    const chartComponent = compiled.querySelector('app-chart');
    expect(playersComponent.length).toBe(0);
    expect(chartComponent).toBeFalsy();
  });

  it('should dispatch loadPlayers and load chartDataSets when getPlayers is called', () => {
    playersServiceSpy.getPlayers.and.returnValue(of(mockPlayers));
    chartServiceSpy.createDataSets.and.returnValue(mockDatset);
    component.getPlayers();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const playersComponent = compiled.querySelectorAll('app-player');
    const chartComponent = compiled.querySelector('app-chart');
    expect(playersComponent.length).toBe(3);
    expect(chartComponent).toBeTruthy();
  });
});

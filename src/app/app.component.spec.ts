import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { AppComponent } from './app.component';
import { Language } from './models/enums';
import { PlayersService } from './services/players.service';
import { UtilsService } from './services/utils.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let translateService: jasmine.SpyObj<TranslateService>;
  let onLangChangeSubject: Subject<any>;
  beforeEach(async () => {
    onLangChangeSubject = new Subject();
    translateService = jasmine.createSpyObj('TranslateService', ['use'], {
      onLangChange: onLangChangeSubject.asObservable(),
    });

    await TestBed.configureTestingModule({
      imports: [AppComponent, TranslateModule.forRoot(), HttpClientModule, StoreModule.forRoot()],
      providers: [{ provide: TranslateService, useValue: translateService }, UtilsService, PlayersService],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should set language from localStorage on init', () => {
    const english = Language.ENGLISH;
    spyOn(localStorage, 'getItem').and.returnValue(english);
    component.ngOnInit();
    expect(translateService.use).toHaveBeenCalledWith(english);
  });

  it('should set language without localStorage on init', () => {
    const english = Language.ENGLISH;
    spyOn(localStorage, 'getItem').and.returnValue(null);
    component.ngOnInit();
    expect(translateService.use).toHaveBeenCalledWith(english);
  });

  it('should update localStorage on language change', () => {
    const spanish = Language.SPANISH;
    spyOn(localStorage, 'setItem');
    component.ngOnInit();
    onLangChangeSubject.next({ lang: spanish }); // 🔥 Simula cambio de idioma
    expect(localStorage.setItem).toHaveBeenCalledWith('language', spanish);
  });

  it('should unsubscribe on destroy', () => {
    const subSpy = spyOn(component['subscription'], 'unsubscribe');
    component.ngOnDestroy();
    expect(subSpy).toHaveBeenCalled();
  });
});

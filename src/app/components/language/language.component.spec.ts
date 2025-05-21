import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Language } from './../../models/enums';

import { LangChangeEvent, TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageComponent } from './language.component';

describe('LanguageComponent', () => {
  let component: LanguageComponent;
  let fixture: ComponentFixture<LanguageComponent>;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LanguageComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    }).compileComponents();

    translateService = TestBed.inject(TranslateService);

    translateService.setTranslation('en_EN', {
      english: 'English',
      spanish: 'Spanish',
    });
    translateService.use('en_EN');
    fixture = TestBed.createComponent(LanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    translateService.onLangChange.next({ lang: 'en_EN' } as LangChangeEvent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should this.language to be equal to data', () => {
    expect(component.language).toBe('en_EN');
  });

  it('should to call translate.use', () => {
    const spyTranslateService = spyOn(translateService, 'use');
    const lang = Language.ENGLISH;
    component.setLanguage(lang);
    expect(spyTranslateService).toHaveBeenCalledOnceWith(lang);
  });

  it('should unsubscribe on ngOnDestroy', () => {
    const spy = spyOn<any>(component['subscription'], 'unsubscribe');
    component.ngOnDestroy();
    expect(spy).toHaveBeenCalled();
  });

  it('should to have two inputs', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const inputs = compiled.querySelectorAll('input');
    expect(inputs.length).toBe(2);
  });

  it('should to containt the labels the next text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const labels = compiled.querySelectorAll('.form-check-label');
    expect(labels[0].textContent).toContain('English');
    expect(labels[1].textContent).toContain('Spanish');
  });
});

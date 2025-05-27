import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { UtilsService } from '../../services/utils.service';
import { setInitialState } from '../../store/players.actions';
import { ExampleIntroductionComponent } from './example-introduction.component';

describe('ExampleIntroductionComponent', () => {
  let component: ExampleIntroductionComponent;
  let fixture: ComponentFixture<ExampleIntroductionComponent>;
  let utilsService: jasmine.SpyObj<UtilsService>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ExampleIntroductionComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [provideMockStore(), { provide: UtilsService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleIntroductionComponent);
    component = fixture.componentInstance;
    component.example = {
      componentCode: 'code rxjs',
      htmlCode: '<h1>rxjs</h1>',
      title: 'rxjs',
    };
    const translate = TestBed.inject(TranslateService);
    translate.setTranslation('en_En', {
      examples: {
        rxjs: {
          title: 'rxjs title',
          description: 'rxjs description',
        },
        ngrx: {
          title: 'ngrx title',
          description: 'ngrx description',
        },
      },
    });
    translate.use('en_En');

    utilsService = TestBed.inject(UtilsService) as jasmine.SpyObj<UtilsService>;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change this.utilsService.isNgRxSignals and call this.store.dispatch', () => {
    const value = utilsService.isNgRxSignals;
    const dispatchSpy = spyOn(store, 'dispatch');
    component.changeIsNgRxSignals();
    expect(utilsService.isNgRxSignals).toBe(!value);
    expect(dispatchSpy).toHaveBeenCalledWith(setInitialState());
  });

  it('should to have h3 with the text "rxjs title" and the description "rxjs description"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h3 = compiled.querySelector('h3');
    const desc = compiled.querySelector('div.text-secondary');
    expect(h3?.textContent).toContain('rxjs title');
    expect(desc?.textContent).toContain('rxjs description');
  });

  it('should to have h3 with the text "ngrx title" , the description "ngrx description" and should to have one input', () => {
    component.example = {
      componentCode: 'code ngrx',
      htmlCode: '<h1>ngrx</h1>',
      title: 'ngrx',
    };
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const h3 = compiled.querySelector('h3');
    const desc = compiled.querySelector('div.text-secondary');
    const inputs = compiled.querySelectorAll('input');
    expect(h3?.textContent).toContain('ngrx title');
    expect(desc?.textContent).toContain('ngrx description');
    expect(inputs.length).toBe(1);
  });
});

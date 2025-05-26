import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { ConclusionComponent } from './conclusion.component';

describe('ConclusionComponent', () => {
  let component: ConclusionComponent;
  let fixture: ComponentFixture<ConclusionComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ConclusionComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ConclusionComponent);
    component = fixture.componentInstance;
    const translate = TestBed.inject(TranslateService);
    translate.setTranslation('en_En', {
      conclusion: {
        title: 'Conclusion Title',
        description: 'This is the conclusion description',
      },
    });
    translate.use('en_En');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to exist the title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h2 = compiled.querySelector('h2');
    expect(h2?.textContent).toContain('Conclusion Title');
  });

  it('should to exist description', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const desc = compiled.querySelector('div.col-md-6.text-secondary');
    expect(desc?.textContent).toContain('This is the conclusion description');
  });

  it('should to exist the img', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img');
    expect(img).toBeTruthy();
  });

  it('should to exist the autor´s name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h6 = compiled.querySelector('h6');
    expect(h6?.textContent).toContain('Juan Manuel Muñoz González');
  });

  it('should to exist the corrects urls', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('a');
    expect(links[0]?.getAttribute('href')).toBe('https://www.linkedin.com/in/juan-manuel-mu%C3%B1oz-gonz%C3%A1lez/');
    expect(links[1]?.getAttribute('href')).toBe('https://juanmamunoz.github.io/resume/#/info');
  });
});

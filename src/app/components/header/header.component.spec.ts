import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoul to have a img as background', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const header = compiled.querySelector('.header');
    const style = window.getComputedStyle(header!);
    expect(style.background).toContain('clouds_new.png');
  });

  it('shoul to have a img as logo', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const logo = compiled.querySelector('img');
    expect(logo).toBeTruthy();
  });

  it('shoul to have a app-language component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const language = compiled.querySelector('app-language');
    expect(language).toBeTruthy();
  });

  it('shoul to have a h1 with the next content', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toContain('Signals');
    expect(h1?.textContent).toContain('Subjects');
    expect(h1?.textContent).toContain('NgRx');
  });
});

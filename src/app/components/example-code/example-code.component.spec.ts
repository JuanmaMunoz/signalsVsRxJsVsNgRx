import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { ExampleCodeComponent } from './example-code.component';

describe('ExampleCodeComponent', () => {
  let component: ExampleCodeComponent;
  let fixture: ComponentFixture<ExampleCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleCodeComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleCodeComponent);
    component = fixture.componentInstance;
    component.example = {
      componentCode: 'code html',
      htmlCode: '<h1>html</h1>',
      title: 'HTML',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to render two app-code components', () => {
    const compile = fixture.nativeElement as HTMLElement;
    const appCodeComponents = compile.querySelectorAll('app-code');
    expect(appCodeComponents.length).toBe(2);
  });

  it('should to render four app-code components', () => {
    component.example = {
      componentCode: 'code ngrx',
      htmlCode: '<h1>ngrx</h1>',
      title: 'ngrx',
    };
    fixture.detectChanges();
    const compile = fixture.nativeElement as HTMLElement;
    const appCodeComponents = compile.querySelectorAll('app-code');
    expect(appCodeComponents.length).toBe(4);
  });
});

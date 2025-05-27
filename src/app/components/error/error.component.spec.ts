import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpErrorResponse } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorComponent } from './error.component';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to exist error', () => {
    component.error = { error: { message: 'Error Server', code: 500 } } as HttpErrorResponse;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const error = compiled.querySelector('.error');
    expect(error?.textContent).toContain('Error Server');
  });

  it('should to use default error', () => {
    component.error = null;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const error = compiled.querySelector('.error');
    expect(error?.textContent).toContain('Internal Server Error');
  });
});

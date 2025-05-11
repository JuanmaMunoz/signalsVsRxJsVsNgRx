import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CodeComponent } from './code.component';

describe('CodeComponent', () => {
  let component: CodeComponent;
  let fixture: ComponentFixture<CodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeComponent, TranslateModule.forRoot()],
      providers: [TranslateService],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to have title and description', () => {
    const title = 'signal code';
    const description = 'this.code = n1 + n2';
    component.title = title;
    component.code = description;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const h6 = compiled.querySelector('h6');
    const code = compiled.querySelector('code');
    expect(h6?.textContent).toContain(title);
    expect(code?.textContent).toContain(description);
  });
});

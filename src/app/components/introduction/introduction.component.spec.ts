import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { IntroductionComponent } from './introduction.component';

describe('IntroductionComponent', () => {
  let component: IntroductionComponent;
  let fixture: ComponentFixture<IntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(IntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to have the next elements', () => {
    const items = component.introductionList;
    const compiled = fixture.nativeElement as HTMLElement;
    const h2 = compiled.querySelector('h2');
    const desc = compiled.querySelector('div.text-secondary');
    const itemListComponents = compiled.querySelectorAll('app-item-list');
    expect(h2).toBeTruthy();
    expect(desc).toBeTruthy();
    expect(itemListComponents.length).toBe(items.length);
  });
});

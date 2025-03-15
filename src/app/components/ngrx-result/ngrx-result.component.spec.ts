import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxResultComponent } from './ngrx-result.component';

describe('NgrxResultComponent', () => {
  let component: NgrxResultComponent;
  let fixture: ComponentFixture<NgrxResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxResultComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgrxResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

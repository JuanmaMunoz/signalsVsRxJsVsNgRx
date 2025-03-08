import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsResultComponent } from './signals-result.component';

describe('SignalsResultComponent', () => {
  let component: SignalsResultComponent;
  let fixture: ComponentFixture<SignalsResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

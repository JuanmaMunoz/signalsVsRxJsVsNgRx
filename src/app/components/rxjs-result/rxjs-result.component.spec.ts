import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsResultComponent } from './rxjs-result.component';

describe('RxjsResultComponent', () => {
  let component: RxjsResultComponent;
  let fixture: ComponentFixture<RxjsResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RxjsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

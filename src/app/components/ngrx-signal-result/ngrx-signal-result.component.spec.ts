import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxResultSignalComponent } from './ngrx-signal-result.component';

describe('NgrxResultSignalComponent', () => {
  let component: NgrxResultSignalComponent;
  let fixture: ComponentFixture<NgrxResultSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxResultSignalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgrxResultSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

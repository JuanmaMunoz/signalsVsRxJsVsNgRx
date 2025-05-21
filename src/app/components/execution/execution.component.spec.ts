import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { ExecutionComponent } from './execution.component';

describe('ExecutionComponent', () => {
  let component: ExecutionComponent;
  let fixture: ComponentFixture<ExecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutionComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to call emit to call getPlayers', () => {
    const emitSpy = spyOn(component.actionGetPlayers, 'emit');
    component.getPlayers();
    expect(emitSpy).toHaveBeenCalledWith();
  });

  it('should to have spinner if is loading and button is disabled', () => {
    component.loading = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const spinners = compiled.querySelectorAll('app-spinner');
    const button = compiled.querySelector('button');
    expect(spinners.length).toBe(1);
    expect(button?.disabled).toBe(true);
  });

  it('should to have spinner if is not loading and button is enabled and show de ms', () => {
    component.time = '100';
    component.loading = false;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const spinners = compiled.querySelectorAll('app-spinner');
    const button = compiled.querySelector('button');
    const ms = compiled.querySelector('h5');
    expect(spinners.length).toBe(0);
    expect(button?.disabled).toBe(false);
    expect(ms?.textContent).toContain(100);
  });
});

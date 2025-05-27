import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { tableTranslation } from '../../info/into_tests';
import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let compiled: HTMLElement;
  let translate: TranslateService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableComponent, TranslateModule.forRoot()],
      providers: [TranslateService],
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    translate = TestBed.inject(TranslateService);
    translate.setTranslation('en_En', tableTranslation);
    translate.use('en_En');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to be the content of h2', () => {
    const h2 = compiled.querySelector('h2');
    expect(h2?.innerHTML).toContain(tableTranslation.table.title);
  });

  it('should to be the content of p', () => {
    const p = compiled.querySelector('p');
    expect(p?.innerHTML).toContain(tableTranslation.table.description);
  });

  it('should to have 4 th', () => {
    const headers = compiled.querySelectorAll('th');
    expect(headers.length).toBe(4);
    expect(headers[1].textContent).toContain('Signals');
    expect(headers[2].textContent).toContain('RxJS Subjects');
    expect(headers[3].textContent).toContain('NgRx');
  });

  it('should to have 4 th', () => {
    const headers = compiled.querySelectorAll('th');
    expect(headers.length).toBe(4);
    expect(headers[1].textContent).toContain('Signals');
    expect(headers[2].textContent).toContain('RxJS Subjects');
    expect(headers[3].textContent).toContain('NgRx');
  });

  it('should to have 10 rows', () => {
    const rows = compiled.querySelectorAll('tr');
    expect(rows.length).toBe(10);
  });

  it('should to check the row Paradigm', () => {
    const td = compiled.querySelectorAll('td');
    expect(td[0].innerHTML).toContain(tableTranslation.table.paradigm.title);
    expect(td[1].innerHTML).toContain(tableTranslation.table.paradigm.signals);
    expect(td[2].innerHTML).toContain(tableTranslation.table.paradigm.rxjs);
    expect(td[3].innerHTML).toContain(tableTranslation.table.paradigm.ngrx);
  });

  it('should to check the row Complexity', () => {
    const td = compiled.querySelectorAll('td');
    expect(td[4].innerHTML).toContain(tableTranslation.table.complexity.title);
    expect(td[5].innerHTML).toContain(tableTranslation.table.complexity.signals);
    expect(td[6].innerHTML).toContain(tableTranslation.table.complexity.rxjs);
    expect(td[7].innerHTML).toContain(tableTranslation.table.complexity.ngrx);
  });

  it('should to check the row Performance', () => {
    const td = compiled.querySelectorAll('td');
    expect(td[8].innerHTML).toContain(tableTranslation.table.performance.title);
    expect(td[9].innerHTML).toContain(tableTranslation.table.performance.signals);
    expect(td[10].innerHTML).toContain(tableTranslation.table.performance.rxjs);
    expect(td[11].innerHTML).toContain(tableTranslation.table.performance.ngrx);
  });

  it('should to check the row Development', () => {
    const td = compiled.querySelectorAll('td');
    expect(td[12].innerHTML).toContain(tableTranslation.table.developmentTime.title);
    expect(td[13].innerHTML).toContain(tableTranslation.table.developmentTime.signals);
    expect(td[14].innerHTML).toContain(tableTranslation.table.developmentTime.rxjs);
    expect(td[15].innerHTML).toContain(tableTranslation.table.developmentTime.ngrx);
  });

  it('should to check the row Change', () => {
    const td = compiled.querySelectorAll('td');
    expect(td[16].innerHTML).toContain(tableTranslation.table.strategyChange.title);
    expect(td[17].innerHTML).toContain(tableTranslation.table.strategyChange.signals);
    expect(td[18].innerHTML).toContain(tableTranslation.table.strategyChange.rxjs);
    expect(td[19].innerHTML).toContain(tableTranslation.table.strategyChange.ngrx);
  });

  it('should to check the row Subscription', () => {
    const td = compiled.querySelectorAll('td');
    expect(td[20].innerHTML).toContain(tableTranslation.table.unsubscribe.title);
    expect(td[21].innerHTML).toContain(tableTranslation.table.unsubscribe.signals);
    expect(td[22].innerHTML).toContain(tableTranslation.table.unsubscribe.rxjs);
    expect(td[23].innerHTML).toContain(tableTranslation.table.unsubscribe.ngrx);
  });

  it('should to check the row Debugging', () => {
    const td = compiled.querySelectorAll('td');
    expect(td[24].innerHTML).toContain(tableTranslation.table.debug.title);
    expect(td[25].innerHTML).toContain(tableTranslation.table.debug.signals);
    expect(td[26].innerHTML).toContain(tableTranslation.table.debug.rxjs);
    expect(td[27].innerHTML).toContain(tableTranslation.table.debug.ngrx);
  });

  it('should to check the row Suitable', () => {
    const td = compiled.querySelectorAll('td');
    expect(td[28].innerHTML).toContain(tableTranslation.table.appTypes.title);
    expect(td[29].innerHTML).toContain(tableTranslation.table.appTypes.signals);
    expect(td[30].innerHTML).toContain(tableTranslation.table.appTypes.rxjs);
    expect(td[31].innerHTML).toContain(tableTranslation.table.appTypes.ngrx);
  });

  it('should to check the row Compatibility', () => {
    const td = compiled.querySelectorAll('td');
    expect(td[32].innerHTML).toContain(tableTranslation.table.compatibility.title);
    expect(td[33].innerHTML).toContain(tableTranslation.table.compatibility.signals);
    expect(td[34].innerHTML).toContain(tableTranslation.table.compatibility.rxjs);
    expect(td[35].innerHTML).toContain(tableTranslation.table.compatibility.ngrx);
  });
});

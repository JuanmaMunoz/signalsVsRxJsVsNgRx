import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { ItemListComponent } from './item-list.component';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ItemListComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    const translate = TestBed.inject(TranslateService);
    translate.setTranslation('en_En', {
      examples: {
        rxjs: {
          title: 'rxjs title',
          description: 'rxjs description',
        },
      },
    });
    translate.use('en_En');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to have the title the next text', () => {
    component.title = 'examples.rxjs.title';
    component.description = 'examples.rxjs.description';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('.item-list__title');
    const description = compiled.querySelector('.item-list__description');
    expect(title?.textContent).toContain('rxjs title');
    expect(description?.textContent).toContain('rxjs description');
  });
});

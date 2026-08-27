import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  // Attribute selector on a native <li> so the list item stays a direct child of its
  // parent <ul> (required for screen readers / valid list structure).
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'li[appItemList]',
  imports: [TranslateModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
  host: {
    class: 'item-list text-decoration-none mb-3',
  },
})
export class ItemListComponent {
  @Input() title!: string;
  @Input() description!: string;
}

import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ItemListComponent } from '../item-list/item-list.component';

@Component({
    selector: 'app-introduction',
    imports: [TranslateModule, ItemListComponent],
    templateUrl: './introduction.component.html',
    styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {
  public introductionList: string[] = [
    'scalability',
    'independency',
    'maintenance',
    'reactivity',
    'capacity',
  ];
}

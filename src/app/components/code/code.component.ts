import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-code',
    imports: [TranslateModule],
    templateUrl: './code.component.html',
    styleUrl: './code.component.scss'
})
export class CodeComponent {
  @Input() title!: string;
  @Input() code!: string;
  /** Heading level for the title so the page keeps a sequential heading order. */
  @Input() level: 3 | 4 = 3;
}

import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-conclusion',
    imports: [TranslateModule],
    templateUrl: './conclusion.component.html',
    styleUrl: './conclusion.component.scss'
})
export class ConclusionComponent {
  public image: string = 'assets/images/photo.jpg';
}

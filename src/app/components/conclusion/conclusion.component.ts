import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-conclusion',
  imports: [TranslateModule, SpinnerComponent],
  templateUrl: './conclusion.component.html',
  styleUrl: './conclusion.component.scss',
})
export class ConclusionComponent {
  public image = 'assets/images/photo.webp';
}

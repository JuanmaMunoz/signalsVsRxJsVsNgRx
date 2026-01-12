import { Component } from '@angular/core';
import { LanguageComponent } from '../language/language.component';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-header',
  imports: [LanguageComponent, SpinnerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public img = 'assets/images/vs.png';
}

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ExamplesComponent } from './components/examples/examples.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { TableComponent } from './components/table/table.component';
import { Language } from './models/enums';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    IntroductionComponent,
    TableComponent,
    ExamplesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    const lang = localStorage.getItem('language') || Language.ENGLISH;
    this.translate.use(lang);
    this.subscription.add(
      this.translate.onLangChange.subscribe((data) => {
        localStorage.setItem('language', data.lang);
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

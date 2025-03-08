import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { examples } from '../../info/info';
import { IExample } from '../../models/interfaces';
import { ExampleComponent } from '../example/example.component';
import { RxjsResultComponent } from '../rxjs-result/rxjs-result.component';
import { SignalsResultComponent } from '../signals-result/signals-result.component';

@Component({
  selector: 'app-examples',
  standalone: true,
  imports: [ExampleComponent, RxjsResultComponent, SignalsResultComponent, TranslateModule],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.scss',
})
export class ExamplesComponent {
  public examples: IExample[] = examples;
}

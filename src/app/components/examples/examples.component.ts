import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { examples, serviceCode } from '../../info/info';
import { IExample } from '../../models/interfaces';
import { UtilsService } from '../../services/utils.service';
import { CodeComponent } from '../code/code.component';
import { ExampleComponent } from '../example/example.component';
import { NgrxResultSignalComponent } from '../ngrx-signal-result/ngrx-signal-result.component';
import { RxjsResultComponent } from '../rxjs-result/rxjs-result.component';
import { SignalsResultComponent } from '../signals-result/signals-result.component';
import { NgrxResultComponent } from './../ngrx-result/ngrx-result.component';

@Component({
  selector: 'app-examples',
  standalone: true,
  imports: [
    ExampleComponent,
    RxjsResultComponent,
    SignalsResultComponent,
    NgrxResultComponent,
    NgrxResultSignalComponent,
    TranslateModule,
    CodeComponent,
  ],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.scss',
})
export class ExamplesComponent {
  public examples: IExample[] = examples;
  public serviceCode: string = serviceCode;
  constructor(public utilsService: UtilsService) {}
}

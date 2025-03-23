import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IExample } from '../../models/interfaces';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-example-introduction',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './example-introduction.component.html',
  styleUrl: './example-introduction.component.scss',
})
export class ExampleIntroductionComponent {
  @Input() example!: IExample;
  constructor(public utilsService: UtilsService) {}

  public changeIsNgRxSignals(): void {
    this.utilsService.isNgRxSignals = !this.utilsService.isNgRxSignals;
  }
}

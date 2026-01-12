import { Component, inject, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { IExample } from '../../models/interfaces';
import { UtilsService } from '../../services/utils.service';
import { setInitialState } from '../../store/players.actions';
import { PlayerState } from '../../store/players.reducers';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-example-introduction',
  imports: [TranslateModule, SpinnerComponent],
  templateUrl: './example-introduction.component.html',
  styleUrl: './example-introduction.component.scss',
})
export class ExampleIntroductionComponent {
  @Input() example!: IExample;
  public utilsService = inject(UtilsService);
  private store = inject(Store<{ players: PlayerState }>);

  public changeIsNgRxSignals(): void {
    this.utilsService.isNgRxSignals = !this.utilsService.isNgRxSignals;
    this.store.dispatch(setInitialState());
  }
}

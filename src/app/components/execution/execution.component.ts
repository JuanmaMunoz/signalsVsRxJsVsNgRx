import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-execution',
  imports: [TranslateModule, SpinnerComponent],
  templateUrl: './execution.component.html',
  styleUrl: './execution.component.scss',
})
export class ExecutionComponent {
  @Input() time = '0';
  @Input() loading = false;
  @Output() actionGetPlayers = new EventEmitter<null>();

  public getPlayers(): void {
    this.actionGetPlayers.emit();
  }
}

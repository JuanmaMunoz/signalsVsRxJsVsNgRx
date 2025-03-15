import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss',
})
export class ButtonsComponent {
  @Input() time: string = '0';
  @Output() actionGetPlayers: EventEmitter<null> = new EventEmitter();

  public getPlayers(): void {
    this.actionGetPlayers.emit();
  }
}

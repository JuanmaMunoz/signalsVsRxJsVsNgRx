import { Component, Input } from '@angular/core';
import { IExample } from '../../models/interfaces';
import { CodeComponent } from '../code/code.component';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CodeComponent],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss',
})
export class ExampleComponent {
  @Input() example!: IExample;
}

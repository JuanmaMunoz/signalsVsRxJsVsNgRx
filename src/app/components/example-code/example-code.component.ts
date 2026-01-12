import { afterNextRender, AfterViewInit, Component, EnvironmentInjector, inject, Input, runInInjectionContext } from '@angular/core';
import { actionsReducers, effects } from '../../info/info';
import { IExample } from '../../models/interfaces';
import { CodeComponent } from '../code/code.component';
declare const Prism: {
  highlightAll: () => void;
};

@Component({
  selector: 'app-example-code',
  imports: [CodeComponent],
  templateUrl: './example-code.component.html',
  styleUrl: './example-code.component.scss',
})
export class ExampleCodeComponent implements AfterViewInit {
  @Input() example!: IExample;
  public actionsReducers: string = actionsReducers;
  public effects: string = effects;
  private envInjector = inject(EnvironmentInjector);

  ngAfterViewInit(): void {
    runInInjectionContext(this.envInjector, () => afterNextRender(() => Prism.highlightAll()));
  }
}

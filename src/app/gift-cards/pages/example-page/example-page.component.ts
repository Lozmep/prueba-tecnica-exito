import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-example-page',
  imports: [],
  templateUrl: './example-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamplePageComponent { }

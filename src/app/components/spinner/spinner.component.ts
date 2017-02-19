import { Component, Input } from '@angular/core';

@Component({
  selector: 'spinner',
  template: `
    <div class="spinner" [ngClass]="{'no-margins':noMargins}"></div>
  `,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @Input() noMargins: boolean;
}


import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clickcount',
  templateUrl: './clickcount.component.html',
  styleUrls: ['./clickcount.component.css'],
})
export class ClickcountComponent {
  constructor() {}

  @Input() startPauseCount: any;
}

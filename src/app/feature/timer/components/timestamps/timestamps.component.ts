import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timestamps',
  templateUrl: './timestamps.component.html',
  styleUrls: ['./timestamps.component.css'],
})
export class TimestampsComponent {
  constructor() {}

  @Input() dateAndTimeOccurance: any;
}

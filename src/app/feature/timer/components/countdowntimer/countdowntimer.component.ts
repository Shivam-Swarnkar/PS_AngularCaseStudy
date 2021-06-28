import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-countdowntimer',
  templateUrl: './countdowntimer.component.html',
  styleUrls: ['./countdowntimer.component.css'],
})
export class CountdowntimerComponent {
  countDownTimerHeading = 'count down timer';
  constructor() {}

  @Input() currentTime!: number;
}

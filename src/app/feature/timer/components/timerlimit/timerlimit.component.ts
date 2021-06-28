import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-timerlimit',
  templateUrl: './timerlimit.component.html',
  styleUrls: ['./timerlimit.component.css'],
})
export class TimerlimitComponent {
  timeLimitSet = null;
  currentTimerStatus: any = {};
  constructor() {}

  @Output() timerLimit = new EventEmitter<number>();
  @Output() pauseTimerStatus = new EventEmitter<boolean>();
  @Output() resetCompleteTimer = new EventEmitter<boolean>();
  @Input() pausedTimeCollection: any;

  startTimer(limit: any) {
    this.timerLimit.emit(limit);
  }
  pauseTimer() {
    this.pauseTimerStatus.emit(true);
  }
  resetTimer() {
    this.timeLimitSet = null;
    this.resetCompleteTimer.emit(true);
  }
}

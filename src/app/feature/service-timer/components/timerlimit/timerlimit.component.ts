import { Component } from '@angular/core';
import { ServiceTimerService } from '../../service-timer.service';

@Component({
  selector: 'app-timerlimit',
  templateUrl: './timerlimit.component.html',
  styleUrls: ['./timerlimit.component.css'],
})
export class TimerlimitComponent {
  timeLimitSet = null;
  pausedTimeCollection = [];
  constructor(private serviceTimer: ServiceTimerService) {}

  startTimer(limit: any) {
    this.serviceTimer.getTimer(this.timeLimitSet);
  }
  pauseTimer() {
    this.serviceTimer.pauseTimer();
    if (this.serviceTimer.pausedTimeCollection)
      this.pausedTimeCollection = this.serviceTimer.pausedTimeCollection;
  }
  resetTimer() {
    this.timeLimitSet = null;
    this.serviceTimer.resetTimer();
  }
}

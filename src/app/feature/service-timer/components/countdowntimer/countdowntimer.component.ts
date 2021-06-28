import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceTimerService } from '../../service-timer.service';

@Component({
  selector: 'app-countdowntimer',
  templateUrl: './countdowntimer.component.html',
  styleUrls: ['./countdowntimer.component.css'],
})
export class CountdowntimerComponent implements OnInit, OnDestroy {
  countDownTimerHeading = 'count down timer';
  currentStatus!: string;
  currentTime: any;
  currentTimerSubs!: Subscription;
  constructor(private serviceTime: ServiceTimerService) {}

  ngOnInit(): void {
    this.currentTimerSubs = this.serviceTime.currentTimer.subscribe(
      (timeLimit: any) => (this.currentTime = timeLimit)
    );
  }

  ngOnDestroy() {
    this.currentTimerSubs.unsubscribe();
  }
}

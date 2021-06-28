import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceTimerService } from '../../service-timer.service';

@Component({
  selector: 'app-clickcount',
  templateUrl: './clickcount.component.html',
  styleUrls: ['./clickcount.component.css'],
})
export class ClickcountComponent implements OnInit, OnDestroy {
  startPauseCount: any = {
    started: 0,
    paused: 0,
  };
  actionCountSubs!: Subscription;
  constructor(private serviceTime: ServiceTimerService) {}

  ngOnInit(): void {
    this.actionCountSubs = this.serviceTime.actionCount.subscribe(
      (countResponse) => (this.startPauseCount = countResponse)
    );
  }

  ngOnDestroy() {
    this.actionCountSubs.unsubscribe();
  }
}

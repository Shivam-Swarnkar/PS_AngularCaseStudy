import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceTimerService } from '../../service-timer.service';

@Component({
  selector: 'app-timestamps',
  templateUrl: './timestamps.component.html',
  styleUrls: ['./timestamps.component.css'],
})
export class TimestampsComponent implements OnInit, OnDestroy {
  dateAndTimeOccurance: any = [];
  dateAndTimeSubs!: Subscription;
  constructor(private serviceTime: ServiceTimerService) {}

  ngOnInit(): void {
    this.dateAndTimeSubs = this.serviceTime.dateAndTimeStamp.subscribe(
      (dateAndTimeStampResponse: any) =>
        (this.dateAndTimeOccurance = dateAndTimeStampResponse)
    );
  }

  ngOnDestroy() {
    this.dateAndTimeSubs.unsubscribe();
  }
}

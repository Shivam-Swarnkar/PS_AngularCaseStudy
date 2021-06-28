import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TimerComponent } from './timer.component';
import { CountdowntimerComponent } from './components/countdowntimer/countdowntimer.component';
import { TimerlimitComponent } from './components/timerlimit/timerlimit.component';
import { TimestampsComponent } from './components/timestamps/timestamps.component';
import { ClickcountComponent } from './components/clickcount/clickcount.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    TimerComponent,
    CountdowntimerComponent,
    TimerlimitComponent,
    TimestampsComponent,
    ClickcountComponent,
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: TimerComponent }]),
    SharedModule,
  ],
  exports: [RouterModule],
})
export class TimerModule {}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClickcountComponent } from './components/clickcount/clickcount.component';
import { CountdowntimerComponent } from './components/countdowntimer/countdowntimer.component';
import { ServiceTimerComponent } from './service-timer.component';
import { ServiceTimerService } from './service-timer.service';
import { TimerlimitComponent } from './components/timerlimit/timerlimit.component';
import { TimestampsComponent } from './components/timestamps/timestamps.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ServiceTimerComponent,
    CountdowntimerComponent,
    TimerlimitComponent,
    TimestampsComponent,
    ClickcountComponent,
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: ServiceTimerComponent }]),
    SharedModule
  ],
  exports: [RouterModule],
  providers: [ServiceTimerService],
})
export class ServiceTimerModule {}

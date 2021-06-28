import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from './banner.component';

@NgModule({
  declarations: [BannerComponent],
  imports: [RouterModule.forChild([{ path: '', component: BannerComponent }])],
})
export class BannerModule {}

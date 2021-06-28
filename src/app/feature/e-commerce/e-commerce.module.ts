import { NgModule } from '@angular/core';
import { ECommerceComponent } from './e-commerce.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { ECommerceService } from './e-commerce.service';

@NgModule({
  declarations: [ECommerceComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: ECommerceComponent }]),
    HttpClientModule,
    SharedModule
  ],
  exports: [RouterModule],
  providers: [ECommerceService],
})
export class ECommerceModule {}

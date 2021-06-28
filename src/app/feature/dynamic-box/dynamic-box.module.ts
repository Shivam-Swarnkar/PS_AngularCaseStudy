import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicBoxComponent } from './dynamic-box.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [DynamicBoxComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: DynamicBoxComponent }]),
    CommonModule,
    ScrollingModule,
  ],
  exports: [RouterModule],
})
export class DynamicBoxModule {}

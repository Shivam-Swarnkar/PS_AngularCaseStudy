import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentService } from './student.service';
import { StudentsComponent } from './students.component';
import { StudentsDirective } from './students.directive';

@NgModule({
  declarations: [StudentsComponent, StudentsDirective],
  imports: [
    RouterModule.forChild([{ path: '', component: StudentsComponent }]),
    HttpClientModule,
    CommonModule,
  ],
  exports: [RouterModule],
  providers: [StudentService],
})
export class StudentsModule {}

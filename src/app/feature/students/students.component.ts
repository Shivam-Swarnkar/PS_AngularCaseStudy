import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { StudentService } from './student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit, OnDestroy {
  isLoading = false;
  errorMessage = null;
  studentsData: any = [];
  studentsDataKey: any = [];
  studentsSubs!: Subscription;
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.studentsSubs = this.studentService
      .getStudents()
      .pipe(
        map((response) => {
          for (let key of Object.keys(Object.values(response)[0])) {
            this.studentsDataKey.push(key);
          }
          [this.studentsDataKey[0], this.studentsDataKey[1]] = [
            this.studentsDataKey[1],
            this.studentsDataKey[0],
          ];

          for (let value of Object.values(response)) {
            this.studentsData.push(value);
          }
        })
      )
      .subscribe(
        () => (this.isLoading = false),
        (error) => {
          this.errorMessage = error.message;
        }
      );
  }

  ngOnDestroy() {
    this.studentsSubs.unsubscribe();
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { studentsUrl } from 'src/environments/environment';

@Injectable()
export class StudentService {
  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get(studentsUrl).pipe(
      map((studentResponse) => {
        return studentResponse;
      })
    );
  }
}

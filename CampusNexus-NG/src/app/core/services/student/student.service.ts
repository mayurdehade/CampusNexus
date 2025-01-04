import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl = 'http://localhost:8080/api/student';

  constructor(private http: HttpClient) {}

  registerStudent(studentData: any): Observable<any> {
    return this.http.post(this.baseUrl + '/register', studentData);
  }
}

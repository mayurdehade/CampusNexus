import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private baseUrl = 'http://localhost:8080/api/job-postings';
  constructor(private http: HttpClient) {}

  getAllJobs(): Observable<any> {
    return this.http.get(this.baseUrl + '/all');
  }

  getJobInfo(id: any): Observable<any> {
    return this.http.get(this.baseUrl + '/find/' + id);
  }

  getActiveJobs(): Observable<any> {
    return this.http.get(this.baseUrl + '/active/');
  }

  applyForJob(
    studentRegisterNo: number,
    jobPostingId: number
  ): Observable<any> {
    return this.http.post(
      `http://localhost:8080/api/job-applications/apply/${studentRegisterNo}/${jobPostingId}`,
      null
    );
  }
}

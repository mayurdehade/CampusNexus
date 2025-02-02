import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/core/services/job/job.service';

@Component({
  selector: 'app-all-job-posting',
  templateUrl: './all-job-posting.component.html',
  styleUrls: ['./all-job-posting.component.css'],
})
export class AllJobPostingComponent {
  jobPostings: any[] = []; // Holds job data

  constructor(private jobService: JobService, private router: Router) {}

  ngOnInit(): void {
    const storedData = localStorage.getItem('student_Data');
    if (!storedData) {
      this.router.navigate(['/']);
    }

    this.jobService.getAllJobs().subscribe((data) => {
      this.jobPostings = data;
    });
  }
}

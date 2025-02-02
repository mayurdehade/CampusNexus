import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/core/services/job/job.service';

@Component({
  selector: 'app-job-preview',
  templateUrl: './job-preview.component.html',
  styleUrls: ['./job-preview.component.css'],
})
export class JobPreviewComponent {
  job: any;

  constructor(private route: ActivatedRoute, private jobService: JobService) {}

  ngOnInit(): void {
    const jobId = this.route.snapshot.paramMap.get('jobid');
    this.jobService.getJobInfo(jobId).subscribe((data) => {
      this.job = data;
    });
  }
}

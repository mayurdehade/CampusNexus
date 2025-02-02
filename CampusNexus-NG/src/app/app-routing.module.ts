import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLoginComponent } from './shared/auth/main-login/main-login.component';
import { FacultyLoginComponent } from './shared/auth/faculty/faculty-login/faculty-login.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { StudentDashboardComponent } from './layouts/student-layout/student-dashboard/student-dashboard.component';
import { FacultyDashboardComponent } from './layouts/faculty-layout/faculty-dashboard/faculty-dashboard.component';
import { UpdateStudentComponent } from './layouts/student-layout/update-student/update-student.component';
import { StudentProfileComponent } from './layouts/student-layout/student-profile/student-profile.component';
import { AllJobPostingComponent } from './layouts/student-layout/all-job-posting/all-job-posting.component';
import { AppliedJobsComponent } from './layouts/student-layout/applied-jobs/applied-jobs.component';
import { JobPreviewComponent } from './layouts/student-layout/job-preview/job-preview.component';

const routes: Routes = [
  { path: '', component: MainLoginComponent },
  { path: 'student/dashboard', component: StudentDashboardComponent },
  { path: 'faculty/dashboard', component: FacultyDashboardComponent },
  { path: 'student/edit-profile', component: UpdateStudentComponent },
  { path: 'student/view-profile', component: StudentProfileComponent },
  { path: 'student/all-job-postings', component: AllJobPostingComponent },
  { path: 'student/applied-jobs', component: AppliedJobsComponent },
  { path: 'student/job-preview/:jobid', component: JobPreviewComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

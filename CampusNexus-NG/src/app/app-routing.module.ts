import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLoginComponent } from './shared/auth/main-login/main-login.component';
import { FacultyLoginComponent } from './shared/auth/faculty/faculty-login/faculty-login.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { StudentDashboardComponent } from './layouts/student-layout/student-dashboard/student-dashboard.component';
import { FacultyDashboardComponent } from './layouts/faculty-layout/faculty-dashboard/faculty-dashboard.component';
import { UpdateStudentComponent } from './layouts/student-layout/update-student/update-student.component';
import { StudentProfileComponent } from './layouts/student-layout/student-profile/student-profile.component';

const routes: Routes = [
  { path: '', component: MainLoginComponent },
  { path: 'student/dashboard', component: StudentDashboardComponent },
  { path: 'faculty/dashboard', component: FacultyDashboardComponent },
  { path: 'student/edit-profile', component: UpdateStudentComponent },
  { path: 'student/view-profile', component: StudentProfileComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

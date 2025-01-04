import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLoginComponent } from './shared/auth/main-login/main-login.component';
import { FacultyLoginComponent } from './shared/auth/faculty/faculty-login/faculty-login.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { StudentDashboardComponent } from './layouts/student-layout/student-dashboard/student-dashboard.component';
import { FacultyDashboardComponent } from './layouts/faculty-layout/faculty-dashboard/faculty-dashboard.component';

const routes: Routes = [
  { path: '', component: MainLoginComponent },
  { path: 'student/dashboard', component: StudentDashboardComponent },
  { path: 'faculty/dashboard', component: FacultyDashboardComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

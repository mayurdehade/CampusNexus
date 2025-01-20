import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './shared/auth/footer/footer.component';
import { StudentLoginComponent } from './shared/auth/student/student-login/student-login.component';
import { StudentRegisterComponent } from './shared/auth/student/student-register/student-register.component';
import { FacultyRegisterComponent } from './shared/auth/faculty/faculty-register/faculty-register.component';
import { MainLoginComponent } from './shared/auth/main-login/main-login.component';
import { FacultyLoginComponent } from './shared/auth/faculty/faculty-login/faculty-login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StudentDashboardComponent } from './layouts/student-layout/student-dashboard/student-dashboard.component';
import { UpdateStudentComponent } from './layouts/student-layout/update-student/update-student.component';
import { FacultyDashboardComponent } from './layouts/faculty-layout/faculty-dashboard/faculty-dashboard.component';
import { FacultyProfileComponent } from './layouts/faculty-layout/faculty-profile/faculty-profile.component';
import { ManageStudentsComponent } from './layouts/faculty-layout/manage-students/manage-students.component';
import { ManageCoordinatorsComponent } from './layouts/faculty-layout/manage-coordinators/manage-coordinators.component';
import { ManageJobPostingsComponent } from './layouts/faculty-layout/manage-job-postings/manage-job-postings.component';
import { ManageJobApplicationsComponent } from './layouts/faculty-layout/manage-job-applications/manage-job-applications.component';
import { ExportApplicationDataComponent } from './layouts/faculty-layout/export-application-data/export-application-data.component';
import { JobAlertComponent } from './layouts/faculty-layout/job-alert/job-alert.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { StudentSidebarComponent } from './layouts/student-layout/student-sidebar/student-sidebar.component';
import { FacultySidebarComponent } from './layouts/faculty-layout/faculty-sidebar/faculty-sidebar.component';
import { StudentProfileComponent } from './layouts/student-layout/student-profile/student-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    StudentLoginComponent,
    StudentRegisterComponent,
    FacultyLoginComponent,
    FacultyRegisterComponent,
    FacultyLoginComponent,
    MainLoginComponent,
    StudentDashboardComponent,
    UpdateStudentComponent,
    FacultyDashboardComponent,
    FacultyProfileComponent,
    ManageStudentsComponent,
    ManageCoordinatorsComponent,
    ManageJobPostingsComponent,
    ManageJobApplicationsComponent,
    ExportApplicationDataComponent,
    JobAlertComponent,
    PageNotFoundComponent,
    StudentSidebarComponent,
    FacultySidebarComponent,
    StudentProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

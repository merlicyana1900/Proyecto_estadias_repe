import { Routes } from '@angular/router';

//Auth
import { LoginComponent } from './Auth/login/login.component';
//AdministracionPanel
import { DashboardComponent } from './Shared/dashboard/dashboard.component';
//Home
import { HomeComponent } from './AdministracionPanel/home/home.component';
//Students
import { ListStudentsComponent } from './AdministracionPanel/students/list-students/list-students.component';
import { StudentProfileComponent } from './AdministracionPanel/students/student-profile/student-profile.component';
import { StudentReportsComponent } from './AdministracionPanel/students/student-reports/student-reports.component';
import { StudentProofComponent } from './AdministracionPanel/students/student-proof/student-proof.component';
import { StudentLetterCommintmentComponent } from './AdministracionPanel/students/student-letter-commintment/student-letter-commintment.component';
//Extraordinary Tests
import { ListPeriodsComponent } from './AdministracionPanel/extraordinary/list-periods/list-periods.component';
import { IntersemesterListPeriodsComponent } from './AdministracionPanel/intersemester/list-periods/list-periods.component';
//Intersemester Tests
import { ViewPeriodComponent } from './AdministracionPanel/extraordinary/view-period/view-period.component';
import { IntersemesterViewPeriodComponent } from './AdministracionPanel/intersemester/view-period/view-period.component';
//PreEnrollment
import { PreEnrollmentListPeriodComponent } from './AdministracionPanel/pre-enrollement/pre-enrollment-list-period/pre-enrollment-list-period.component';
import { PreEnrollmentViewPeriodComponent } from './AdministracionPanel/pre-enrollement/pre-enrollment-view-period/pre-enrollment-view-period.component';
//School Periods
import { ListSchoolPeriodsComponent } from './AdministracionPanel/school-periods/list-school-periods/list-school-periods.component';
import { RegisterSchedulesComponent } from './AdministracionPanel/school-periods/register-schedules/register-schedules.component';
import { RegisterQualificationsComponent } from './AdministracionPanel/school-periods/register-qualifications/register-qualifications.component';
//Upload Files
import { UploadFilesComponent } from './AdministracionPanel/upload/upload-files/upload-files.component';
//Users
import { ListUsersComponent } from './AdministracionPanel/users/list-users/list-users.component';
import { ViewUserComponent } from './AdministracionPanel/users/view-user/view-user.component';
//Teachers
import { ListTeachersComponent } from './AdministracionPanel/teachers/list-teachers/list-teachers.component';
import { ViewTeachersComponent } from './AdministracionPanel/teachers/view-teachers/view-teachers.component';
//Reports
import { GenerateReportsComponent } from './AdministracionPanel/reports/generate-reports/generate-reports.component';
//Payments
import { PaymentsViewComponent } from './AdministracionPanel/payments/payments-view/payments-view.component';
//Configuration
import { ConfigurationViewComponent } from './AdministracionPanel/configuration/configuration-view/configuration-view.component';
import { MySubjectsViewComponent } from './DocentesPanel/mysubjects/my-subjects-view/my-subjects-view.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'students',
        children: [
          { path: '', component: ListStudentsComponent },
          { path: 'create', component: StudentProfileComponent },
          { path: ':id', component: StudentProfileComponent },
          { path: 'reports/:id', component: StudentReportsComponent },
          { path: 'proofs/:id', component: StudentProofComponent },
          {
            path: 'letterCommitment/:id',
            component: StudentLetterCommintmentComponent,
          },
        ],
      },
      {
        path: 'extraordinarytests',
        children: [
          { path: '', component: ListPeriodsComponent },
          { path: ':id', component: ViewPeriodComponent },
        ],
      },
      {
        path: 'intersemestertests',
        children: [
          { path: '', component: IntersemesterListPeriodsComponent },
          { path: ':id', component: IntersemesterViewPeriodComponent },
        ],
      },
      {
        path: 'preenrollment',
        children: [
          { path: '', component: PreEnrollmentListPeriodComponent },
          { path: ':id', component: PreEnrollmentViewPeriodComponent },
        ],
      },
      {
        path: 'schoolperiods',
        children: [
          { path: '', component: ListSchoolPeriodsComponent },
          { path: ':id', component: RegisterSchedulesComponent },
          {
            path: 'qualifications/:id',
            component: RegisterQualificationsComponent,
          },
        ],
      },
      {
        path: 'qualifications',
        children: [{ path: 'upload', component: UploadFilesComponent }],
      },
      {
        path: 'users',
        children: [
          { path: '', component: ListUsersComponent },
          { path: 'newUser', component: ViewUserComponent },
          { path: ':id', component: ViewUserComponent },
        ],
      },
      {
        path: 'teachers',
        children: [
          { path: '', component: ListTeachersComponent },
          { path: 'newTeacher', component: ViewTeachersComponent },
          { path: ':id', component: ViewTeachersComponent },
        ],
      },
      { path: 'reports', component: GenerateReportsComponent },
      { path: 'payments', component: PaymentsViewComponent },
      { path: 'configuration', component: ConfigurationViewComponent },
      { path: 'mysubjects', component: MySubjectsViewComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
];

import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './components/app/app.component';
import {StdLoginComponent} from './components/login/std-login/std-login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StdLoginLoginComponent} from './components/login/std-login-login/std-login-login.component';
import {StdLoginRegisterComponent} from './components/login/std-login-register/std-login-register.component';
import {RouterModule, Routes} from '@angular/router';
import {StdForgotPasswordComponent} from './components/forgot-password/std-forgot-password.component';
import {StdFooterComponent} from './components/footer/std-footer/std-footer.component';

import {StdDashboardComponent} from './components/dashboard/std-dashboard/std-dashboard.component';
import {StdHeaderComponent} from './components/header/std-header.component';
import {UserService} from './services/user.service';
import {AuthGuard} from './classes/authentification/auth-guard';
import {AuthenticationService} from './services/authentication.service';
import {ValuesPipe} from './pipes/values.pipe';
import {CountPipe} from './pipes/count.pipe';
import {GroupByPipe} from './pipes/group-by.pipe';
import {FilterByPipe} from './pipes/filter-by.pipe';
import {StdNotFoundComponent} from './components/std-not-found/std-not-found.component';
import {Broadcaster} from './classes/broadcaster';
import {StdTimetableComponent} from './components/timetable/std-timetable/std-timetable.component';
import {StdNotesComponent} from './components/notes/std-notes/std-notes.component';
import {StdCkeditorComponent} from './components/ckeditor/std-ckeditor/std-ckeditor.component';

import {CKEditorModule} from 'ng2-ckeditor';
import {StdTimetableEditComponent} from './components/timetable/std-timetable-edit/std-timetable-edit.component';
import {StdTimetableEditLessonComponent} from './components/timetable/std-timetable-edit-lesson/std-timetable-edit-lesson.component';
import {StdCalendarComponent} from './components/calendar/std-calendar/std-calendar.component';
import {StdAbsencesComponent} from './components/absences/std-absences/std-absences.component';
import {StdDashboardNotesComponent} from './components/dashboard/std-dashboard-notes/std-dashboard-notes.component';
import {StdDashboardAbsencesComponent} from './components/dashboard/std-dashboard-absences/std-dashboard-absences.component';
import {StdDashboardWikiComponent} from './components/dashboard/std-dashboard-wiki/std-dashboard-wiki.component';
import {StdDashboardHomeworkComponent} from './components/dashboard/std-dashboard-homework/std-dashboard-homework.component';
import {StdWikiComponent} from './components/wiki/std-wiki/std-wiki.component';
import {StdHomeworkComponent} from './components/homework/std-homework/std-homework.component';

export const ROUTES: Routes = [
    {path: '', component: StdLoginComponent, data: {title: 'StudentDashboard'}},
    {path: 'reset', component: StdForgotPasswordComponent, data: {title: 'StudentDashboard'}},
    {path: 'dashboard', component: StdDashboardComponent, canActivate: [AuthGuard], data: {title: 'Dashboard'}},
    {path: 'notes', component: StdNotesComponent, canActivate: [AuthGuard], data: {title: 'Unterrichtsmitschriften'}},
    {path: 'absences', component: StdAbsencesComponent, canActivate: [AuthGuard], data: {title: 'Fehlzeiten'}},
    {path: 'wiki', component: StdWikiComponent, canActivate: [AuthGuard], data: {title: 'Wiki'}},
    {path: 'homework', component: StdHomeworkComponent, canActivate: [AuthGuard], data: {title: 'Hausaufgaben'}},
    {path: '**', component: StdNotFoundComponent, data: {title: 'StudentDashboard'}}

];

@NgModule({
    declarations: [
        AppComponent,
        StdLoginComponent,
        StdLoginLoginComponent,
        StdLoginRegisterComponent,
        StdForgotPasswordComponent,
        StdFooterComponent,
        StdHeaderComponent,
        StdDashboardComponent,
        StdDashboardComponent,
        StdNotFoundComponent,
        ValuesPipe,
        CountPipe,
        GroupByPipe,
        FilterByPipe,
        StdTimetableComponent,
        StdNotesComponent,
        StdCkeditorComponent,
        StdTimetableEditComponent,
        StdTimetableEditLessonComponent,
        StdCalendarComponent,
        StdAbsencesComponent,
        StdDashboardNotesComponent,
        StdDashboardAbsencesComponent,
        StdDashboardWikiComponent,
        StdDashboardHomeworkComponent,
        StdWikiComponent,
        StdHomeworkComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(ROUTES),
        CKEditorModule,
    ],
    providers: [
        {provide: LOCALE_ID, useValue: 'de-DE'},
        AuthenticationService,
        AuthGuard,
        UserService,
        Broadcaster
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

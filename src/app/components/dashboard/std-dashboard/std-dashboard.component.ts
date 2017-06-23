import {Component, OnInit} from '@angular/core';
import {Broadcaster} from '../../../classes/broadcaster';
import {ActivatedRoute} from '@angular/router';
import {Timetable} from '../../../classes/timetable';
import {Lesson} from '../../../classes/lesson';
import {Subject} from '../../../classes/subject';

@Component({
    selector: 'app-std-dashboard',
    templateUrl: './std-dashboard.component.html',
    styleUrls: ['./std-dashboard.component.css']
})
export class StdDashboardComponent implements OnInit {

    public timetable: Timetable;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {

        this.initTest();

        this.route.data.subscribe((data) => {
            if (data['title']) {
                Broadcaster.broadcast('changeTitle', data['title']);
            }
        });
    }

    private initTest() {

        this.timetable = new Timetable();
        this.timetable.maxHour = 8;
        this.timetable.lessons = [];
        this.timetable.days = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'];

        this.timetable.lessons['Montag'] = [];
        this.timetable.lessons['Dienstag'] = [];
        this.timetable.lessons['Mittwoch'] = [];
        this.timetable.lessons['Donnerstag'] = [];
        this.timetable.lessons['Freitag'] = [];

        let lesson = new Lesson();
        lesson.subject = new Subject();
        lesson.subject.name = 'Englisch';
        lesson.room = '130';
        lesson.teacher = 'TMO';
        lesson.hour = 1;
        lesson.day = 'Montag';

        this.timetable.lessons['Montag'][lesson.hour] = lesson;

        lesson = new Lesson();
        lesson.subject = new Subject();
        lesson.subject.name = 'Mathe';
        lesson.room = '120';
        lesson.teacher = 'KT';
        lesson.hour = 2;
        lesson.day = 'Montag';

        this.timetable.lessons['Montag'][lesson.hour] = lesson;

        lesson = new Lesson();
        lesson.subject = new Subject();
        lesson.subject.name = 'Mathe';
        lesson.room = '120';
        lesson.teacher = 'KT';
        lesson.hour = 3;
        lesson.day = 'Montag';

        this.timetable.lessons['Montag'][lesson.hour] = lesson;

        lesson = new Lesson();
        lesson.subject = new Subject();
        lesson.subject.name = 'Deutsch';
        lesson.room = '220';
        lesson.teacher = 'UH';
        lesson.hour = 4;
        lesson.day = 'Montag';

        this.timetable.lessons['Montag'][lesson.hour] = lesson;

        lesson = new Lesson();
        lesson.subject = new Subject();
        lesson.subject.name = 'Religion';
        lesson.room = '245';
        lesson.teacher = 'SC';
        lesson.hour = 1;
        lesson.day = 'Dienstag';

        this.timetable.lessons['Dienstag'][lesson.hour] = lesson;


        lesson = new Lesson();
        lesson.subject = new Subject();
        lesson.subject.name = 'Informatik';
        lesson.room = '045';
        lesson.teacher = 'KL';
        lesson.hour = 2;
        lesson.day = 'Dienstag';

        this.timetable.lessons['Dienstag'][lesson.hour] = lesson;

        lesson = new Lesson();
        lesson.subject = new Subject();
        lesson.subject.name = 'Informatik';
        lesson.room = '045';
        lesson.teacher = 'KL';
        lesson.hour = 3;
        lesson.day = 'Dienstag';

        this.timetable.lessons['Dienstag'][lesson.hour] = lesson;


        lesson = new Lesson();
        lesson.subject = new Subject();
        lesson.subject.name = 'Mathe';
        lesson.room = '120';
        lesson.teacher = 'KT';
        lesson.hour = 4;
        lesson.day = 'Dienstag';

        this.timetable.lessons['Dienstag'][lesson.hour] = lesson;

    }
}

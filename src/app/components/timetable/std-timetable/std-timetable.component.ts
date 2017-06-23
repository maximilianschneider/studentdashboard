import {Component, Input, OnInit} from '@angular/core';
import {Timetable} from '../../../classes/timetable';

@Component({
    selector: 'app-std-timetable',
    templateUrl: './std-timetable.component.html',
    styleUrls: ['./std-timetable.component.css']
})
export class StdTimetableComponent implements OnInit {

    @Input() timetable: Timetable;

    constructor() {
    }

    ngOnInit() {
    }

}

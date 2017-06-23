import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Broadcaster} from '../../../classes/broadcaster';

@Component({
    selector: 'app-std-absences',
    templateUrl: './std-absences.component.html',
    styleUrls: ['./std-absences.component.css']
})
export class StdAbsencesComponent implements OnInit {

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data.subscribe((data) => {
            if (data['title']) {
                Broadcaster.broadcast('changeTitle', data['title']);
            }
        });
    }
}

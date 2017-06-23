import {Component, OnInit} from '@angular/core';
import {Broadcaster} from '../../../classes/broadcaster';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-std-homework',
    templateUrl: './std-homework.component.html',
    styleUrls: ['./std-homework.component.css']
})
export class StdHomeworkComponent implements OnInit {

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

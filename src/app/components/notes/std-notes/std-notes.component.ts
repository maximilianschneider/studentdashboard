import {Component, OnInit} from '@angular/core';
import {Broadcaster} from '../../../classes/broadcaster';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-std-notes',
    templateUrl: './std-notes.component.html',
    styleUrls: ['./std-notes.component.css']
})
export class StdNotesComponent implements OnInit {

    public show: boolean;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.show = true;
        this.route.data.subscribe((data) => {
            if (data['title']) {
                Broadcaster.broadcast('changeTitle', data['title']);
            }
        });
    }
}

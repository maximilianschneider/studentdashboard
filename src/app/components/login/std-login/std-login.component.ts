import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Broadcaster} from '../../../classes/broadcaster';

@Component({
    selector: 'app-std-login',
    templateUrl: './std-login.component.html',
    styleUrls: ['./std-login.component.css']
})
export class StdLoginComponent implements OnInit {

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data.subscribe((data) => {
            if (data.hasOwnProperty('title')) {
                Broadcaster.broadcast('changeTitle', data.title);
            }
        });
    }
}

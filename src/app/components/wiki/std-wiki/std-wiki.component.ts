import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Broadcaster} from '../../../classes/broadcaster';

@Component({
    selector: 'app-std-wiki',
    templateUrl: './std-wiki.component.html',
    styleUrls: ['./std-wiki.component.css']
})
export class StdWikiComponent implements OnInit {

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

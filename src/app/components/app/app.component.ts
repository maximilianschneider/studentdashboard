import {Component, OnInit} from '@angular/core';
import {Router, RoutesRecognized} from '@angular/router';
import {Broadcaster} from '../../classes/broadcaster';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private test: string;

    constructor() {
        Broadcaster.init();
    }

    ngOnInit(): void {
        this.test = 'Hallo';
    }
}

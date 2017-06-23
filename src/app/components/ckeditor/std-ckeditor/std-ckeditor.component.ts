import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-std-ckeditor',
    templateUrl: './std-ckeditor.component.html',
    styleUrls: ['./std-ckeditor.component.css']
})
export class StdCkeditorComponent implements OnInit {

    @Input() content;

    constructor() {
    }

    ngOnInit() {

    }

}

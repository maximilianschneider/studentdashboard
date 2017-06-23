import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-std-timetable-edit-lesson',
    templateUrl: './std-timetable-edit-lesson.component.html',
    styleUrls: ['./std-timetable-edit-lesson.component.css']
})
export class StdTimetableEditLessonComponent implements OnInit {

    hour: object;
    closeResult: string;

    constructor(private modalService: NgbModal) {
        this.hour = {lesson: '', teacher: '', room: ''};
    }

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    ngOnInit() {

    }

}

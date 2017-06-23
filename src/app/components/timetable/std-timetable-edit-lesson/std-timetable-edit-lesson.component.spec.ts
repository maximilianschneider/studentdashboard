import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StdTimetableEditLessonComponent} from './std-timetable-edit-lesson.component';

describe('StdTimetableEditLessonComponent', () => {
    let component: StdTimetableEditLessonComponent;
    let fixture: ComponentFixture<StdTimetableEditLessonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StdTimetableEditLessonComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StdTimetableEditLessonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

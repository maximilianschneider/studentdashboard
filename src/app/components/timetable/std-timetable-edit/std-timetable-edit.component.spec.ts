import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StdTimetableEditComponent} from './std-timetable-edit.component';

describe('StdTimetableEditComponent', () => {
    let component: StdTimetableEditComponent;
    let fixture: ComponentFixture<StdTimetableEditComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StdTimetableEditComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StdTimetableEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StdTimetableComponent} from './std-timetable.component';

describe('StdTimetableComponent', () => {
    let component: StdTimetableComponent;
    let fixture: ComponentFixture<StdTimetableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StdTimetableComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StdTimetableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

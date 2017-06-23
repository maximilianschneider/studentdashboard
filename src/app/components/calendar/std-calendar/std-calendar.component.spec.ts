import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StdCalendarComponent} from './std-calendar.component';

describe('StdCalendarComponent', () => {
    let component: StdCalendarComponent;
    let fixture: ComponentFixture<StdCalendarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StdCalendarComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StdCalendarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

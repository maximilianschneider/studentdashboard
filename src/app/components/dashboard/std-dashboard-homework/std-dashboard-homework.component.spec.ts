import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StdDashboardHomeworkComponent} from './std-dashboard-homework.component';

describe('StdDashboardHomeworkComponent', () => {
    let component: StdDashboardHomeworkComponent;
    let fixture: ComponentFixture<StdDashboardHomeworkComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StdDashboardHomeworkComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StdDashboardHomeworkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

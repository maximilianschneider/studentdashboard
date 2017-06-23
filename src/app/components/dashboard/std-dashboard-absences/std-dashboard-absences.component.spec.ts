import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StdDashboardAbsencesComponent} from './std-dashboard-absences.component';

describe('StdDashboardAbsencesComponent', () => {
    let component: StdDashboardAbsencesComponent;
    let fixture: ComponentFixture<StdDashboardAbsencesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StdDashboardAbsencesComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StdDashboardAbsencesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

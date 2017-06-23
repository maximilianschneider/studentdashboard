import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StdDashboardNotesComponent} from './std-dashboard-notes.component';

describe('StdDashboardNotesComponent', () => {
    let component: StdDashboardNotesComponent;
    let fixture: ComponentFixture<StdDashboardNotesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StdDashboardNotesComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StdDashboardNotesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

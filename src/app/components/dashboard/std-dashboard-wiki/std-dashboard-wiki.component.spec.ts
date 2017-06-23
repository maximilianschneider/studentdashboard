import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StdDashboardWikiComponent} from './std-dashboard-wiki.component';

describe('StdDashboardWikiComponent', () => {
    let component: StdDashboardWikiComponent;
    let fixture: ComponentFixture<StdDashboardWikiComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StdDashboardWikiComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StdDashboardWikiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

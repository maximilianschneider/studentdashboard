import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StdAbsencesComponent} from './std-absences.component';

describe('StdAbsencesComponent', () => {
    let component: StdAbsencesComponent;
    let fixture: ComponentFixture<StdAbsencesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StdAbsencesComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StdAbsencesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

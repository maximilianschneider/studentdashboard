import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StdNotesComponent} from './std-notes.component';

describe('StdNotesComponent', () => {
    let component: StdNotesComponent;
    let fixture: ComponentFixture<StdNotesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StdNotesComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StdNotesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

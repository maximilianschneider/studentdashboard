import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StdHomeworkComponent} from './std-homework.component';

describe('StdHomeworkComponent', () => {
    let component: StdHomeworkComponent;
    let fixture: ComponentFixture<StdHomeworkComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StdHomeworkComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StdHomeworkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

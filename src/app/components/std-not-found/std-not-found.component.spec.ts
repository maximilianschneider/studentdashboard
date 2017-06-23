import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StdNotFoundComponent} from './std-not-found.component';

describe('StdNotFoundComponent', () => {
    let component: StdNotFoundComponent;
    let fixture: ComponentFixture<StdNotFoundComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StdNotFoundComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StdNotFoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

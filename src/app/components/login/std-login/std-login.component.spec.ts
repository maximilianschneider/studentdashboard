import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StdLoginComponent} from './std-login.component';

describe('StdLoginComponent', () => {
    let component: StdLoginComponent;
    let fixture: ComponentFixture<StdLoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StdLoginComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StdLoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

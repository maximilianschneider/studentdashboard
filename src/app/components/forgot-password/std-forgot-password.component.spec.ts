import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StdForgotPasswordComponent} from './std-forgot-password.component';

describe('StdForgotPasswordComponent', () => {
    let component: StdForgotPasswordComponent;
    let fixture: ComponentFixture<StdForgotPasswordComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StdForgotPasswordComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StdForgotPasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

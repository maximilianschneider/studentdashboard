import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StdLoginRegisterComponent} from './std-login-register.component';

describe('StdLoginRegisterComponent', () => {
    let component: StdLoginRegisterComponent;
    let fixture: ComponentFixture<StdLoginRegisterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StdLoginRegisterComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StdLoginRegisterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

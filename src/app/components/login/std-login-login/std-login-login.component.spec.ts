import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StdLoginLoginComponent} from './std-login-login.component';

describe('StdLoginLoginComponent', () => {
    let component: StdLoginLoginComponent;
    let fixture: ComponentFixture<StdLoginLoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StdLoginLoginComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StdLoginLoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

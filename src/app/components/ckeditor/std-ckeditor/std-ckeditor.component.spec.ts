import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StdCkeditorComponent} from './std-ckeditor.component';

describe('StdCkeditorComponent', () => {
    let component: StdCkeditorComponent;
    let fixture: ComponentFixture<StdCkeditorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StdCkeditorComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StdCkeditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StdHeaderComponent} from './std-header.component';

describe('StdHeaderComponent', () => {
    let component: StdHeaderComponent;
    let fixture: ComponentFixture<StdHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StdHeaderComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StdHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StdWikiComponent} from './std-wiki.component';

describe('StdWikiComponent', () => {
    let component: StdWikiComponent;
    let fixture: ComponentFixture<StdWikiComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StdWikiComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StdWikiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-std-forgot-password',
    templateUrl: './std-forgot-password.component.html',
    styleUrls: ['./std-forgot-password.component.css']
})
export class StdForgotPasswordComponent implements OnInit {

    private forgotPasswordCredentials: object;

    constructor() {
    }

    ngOnInit() {
        this.forgotPasswordCredentials = {email: ''};
    }

    public onResetPassword(valid: boolean) {

    }
}

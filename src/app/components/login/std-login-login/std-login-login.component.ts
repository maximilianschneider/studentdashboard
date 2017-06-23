import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';
import {User} from '../../../classes/user';

@Component({
    selector: 'app-std-login-login',
    templateUrl: './std-login-login.component.html',
    styleUrls: ['./std-login-login.component.css']
})
export class StdLoginLoginComponent implements OnInit {

    private loginCredentials: object;

    constructor(private authenticationService: AuthenticationService,
                private router: Router) {
    }

    ngOnInit() {
        this.loginCredentials = {email: '', password: ''};
    }

    public onLogin(valid: boolean) {
        console.log(valid);
        if (valid) {
            console.log(valid);
            let user = new User();
            user.firstname = 'Maximilian';
            user.lastname = 'Schneider';
            user.email = 'max.1995@t-online.de';
            user.password = '';
            this.authenticationService.login(user).subscribe(
                loggedIn => {
                    console.log(loggedIn);
                    this.router.navigateByUrl('dashboard');
                }
            );
        }

    }
}

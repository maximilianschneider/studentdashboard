import {Component, OnInit} from '@angular/core';
import {RegisterCredentials} from '../../../classes/register-credentials';
import {User} from '../../../classes/user';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-std-login-register',
    templateUrl: './std-login-register.component.html',
    styleUrls: ['./std-login-register.component.css']
})

export class StdLoginRegisterComponent implements OnInit {
    private registerCredentials: RegisterCredentials;
    private registerErrors: string[];

    constructor(private authService: AuthenticationService,
                private router: Router) {
    }

    ngOnInit() {
        this.registerCredentials = new RegisterCredentials();
    }

    public onRegister(valid: boolean) {
        if (valid) {
            console.log('triggered');
            const user = new User();

            user.firstname = this.registerCredentials.firstName;
            user.lastname = this.registerCredentials.lastName;
            user.email = this.registerCredentials.email;
            user.password = this.registerCredentials.password;

            this.authService.login(user).subscribe(
                loggedIn => {
                    console.log(loggedIn);
                    this.router.navigateByUrl('dashboard');
                }
            );

            /* this.userService.isAlreadyRegistered(this.registerCredentials.email)
             .subscribe(
             isRegistered => this.register(isRegistered),
             error => console.log(error)
             );*/
        }
    }

    private register(isRegistered: boolean) {
        this.registerErrors = [];
        if (isRegistered) {
            this.registerErrors.push('E-Mailadresse bereits genutzt');
        } else {
            /* this.userService.register(this.registerCredentials).subscribe(
             registered => registered ? this.authenticationService.login() : null,
             error => console.log(error)
             ); */
        }
    }
}

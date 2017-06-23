import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {Router} from '@angular/router';
import {User} from '../classes/user';

@Injectable()
export class AuthenticationService {

    private user: User;

    isLoggedIn: boolean;

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    constructor(private router: Router) {
        this.isLoggedIn = false;
    };

    login(user): Observable<boolean> {
        this.user = user;
        return Observable.of(true).delay(1000).do(
            val => {
                console.log('do it');
                this.isLoggedIn = true;
            });
    };

    logout(): void {
        this.user = null;
        this.isLoggedIn = false;
        this.router.navigateByUrl('/');
    };

    getUser(): User {
        return this.user;
    }
}

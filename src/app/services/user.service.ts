import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {RegisterCredentials} from '../classes/register-credentials';

@Injectable()
export class UserService {

    private static registerHandler(res: Response | any): boolean {
        const body = res.json();
        const data = body.data || '';
        let registered = false;
        if (data && data.registered) {
            registered = !!data.registered;
        }
        return Observable.create(registered);
    }

    private static isRegistered(res: Response | any): boolean {
        const body = res.json();
        const data = body.data || '';
        let registered = false;
        if (data && data.count) {
            registered = +data.count > 1;
        }
        return Observable.create(registered);
    }

    private static handleError(error: Response | any) {

        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    constructor(private http: Http) {
    }

    isAlreadyRegistered(email: string): Observable<boolean> {

        const url = '';

        return this.http.get(url + email)
            .map(UserService.isRegistered)
            .catch(UserService.handleError);
    }

    register(registerCredentials: RegisterCredentials): Observable<boolean> {

        const url = '';

        return this.http.post(url, {registerCredentials})
            .map(UserService.registerHandler)
            .catch(UserService.handleError);
    }

}

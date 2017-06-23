import {Component, OnInit} from '@angular/core';
import {Broadcaster} from '../../classes/broadcaster';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {User} from '../../classes/user';

@Component({
    selector: 'app-std-header',
    templateUrl: './std-header.component.html',
    styleUrls: ['./std-header.component.css']
})
export class StdHeaderComponent implements OnInit {

    public title: string;
    public showBackButton: boolean;
    private user: User;

    constructor(private authService: AuthenticationService,
                private router: Router) {
    }

    ngOnInit() {
        console.log(this.user);
        this.title = 'Test';
        this.registerTypeBroadcast();

        this.showBackButton = false;

        this.router.events.subscribe((event: any) => {
            console.log(event);
            if (!this.user) {
                this.user = this.authService.getUser();
            }

            this.showBackButton = !this.router.isActive('/', true)
                && !this.router.isActive('/dashboard', false)
                && !this.router.isActive('/reset', false);
        });
    }

    registerTypeBroadcast() {
        Broadcaster.on<string>('changeTitle')
            .subscribe(message => {
                console.log(message);
                this.title = message;
            });
    }

    logout() {
        this.authService.logout();
    }

    // this.broadcaster.broadcast('message', `Message from ${this.childID}`);
}

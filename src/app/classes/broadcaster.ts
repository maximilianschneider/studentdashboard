import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

interface BroadcastEvent {
    key: any;
    data?: any;
}

export class Broadcaster {
    private static _eventBus: Subject<BroadcastEvent>;

    static init() {
        Broadcaster._eventBus = new Subject<BroadcastEvent>();
    }

    static broadcast(key: any, data?: any) {
        Broadcaster._eventBus.next({key, data});
    }

    static on<T>(key: any): Observable<T> {
        return Broadcaster._eventBus.asObservable()
            .filter(event => event.key === key)
            .map(event => <T>event.data);
    }
}

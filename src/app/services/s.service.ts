import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {A} from '../entities/a';

@Injectable()
export class SService {
    constructor(private http: HttpClient) {}

    getTournaments(): Observable<A[]> {
        return this.http.get<A[]>('http://localhost:8000/api/tournament');
    }
}

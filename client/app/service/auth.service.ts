import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
    constructor(private authHttp: AuthHttp) {}

    login(username: string, password: string): Observable<boolean> {
        return this.authHttp.post('/api/login', { username: username, password: password })
            .map((response: Response) => {
                let token = response.json() && response.json().token;
                if (token) {
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                    return true;
                } else {
                    return false;
                }
            });
    }

    logout(): void {
        localStorage.removeItem('currentUser');
    }
}
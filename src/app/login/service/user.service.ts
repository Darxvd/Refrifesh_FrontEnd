import { Injectable } from '@angular/core';
import { LoginEntity } from '../model/user-entity';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserDEntity } from '../model/user-entity-ts';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlgeneral = 'http://localhost:8085/login';

  constructor(private http: HttpClient) { }

  login(user: LoginEntity): Observable<LoginEntity> {
    const loginUrl = `${this.urlgeneral}/loggin`;
    return this.http.post<LoginEntity>(loginUrl, user);
  }
}

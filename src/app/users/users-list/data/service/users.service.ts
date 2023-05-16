import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../schema/users";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) {
  }

  public getUsers(): Observable<User[]> {
    return this._http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}

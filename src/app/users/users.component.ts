import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as UsersActions from './state/users.actions';
import {Observable} from "rxjs";
import {errorSelector, isLoadingSelector, usersSelector} from "./state/users.selectors";
import {User} from "./data/schema/users";
import {AppState} from "../shared/app-state";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  public isLoading$: Observable<boolean>;
  public users$: Observable<User[]>;
  public error$: Observable<string>;

  constructor(private _store: Store<AppState>) {
    this.isLoading$ = this._store.select(isLoadingSelector);
    this.users$ = this._store.select(usersSelector);
    this.error$ = this._store.select(errorSelector);
  }

  public ngOnInit(): void {
    this._store.dispatch(UsersActions.getUsers());
  }
}

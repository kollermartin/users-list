import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {UsersService} from "../data/service/users.service";
import * as UsersActions from "./users.actions";
import {catchError, exhaustMap, map, of} from "rxjs";

@Injectable()
export class UsersEffects {
  getUsers$ = createEffect(() =>
    this._actions$.pipe(
      ofType(UsersActions.getUsers),
      exhaustMap(() => {
        return this._usersApi.getUsers().pipe(
          map(users => UsersActions.getUsersSuccess({users})),
          catchError(error => of(UsersActions.getUsersFailure({error: error.message})))
        )
      })
    )
  )

  constructor(private _actions$: Actions, private _usersApi: UsersService) {
  }
}

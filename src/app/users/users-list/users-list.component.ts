import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {User} from "../data/schema/users";
import {Store} from "@ngrx/store";
import * as userActions from "../state/users.actions";
import {AppState} from "../../shared/app-state";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {

  @Input() users: User[] | undefined;

  constructor(private _store: Store<AppState>, private _router: Router) {
  }

  public onClick(user: User): void {
    this._store.dispatch(userActions.selectUser({user}));
    this._router.navigate(['/user-posts']);
  }
}

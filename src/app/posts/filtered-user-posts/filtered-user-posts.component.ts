import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../shared/app-state";
import * as postsActions from "../state/posts.actions";
import {Post} from "../data/schema/post";
import {Observable} from "rxjs";
import {selectUsersPosts, statusSelector} from "../state/posts.selectors";
import {StatusEnum} from "../../shared/status-enum";
import {User} from "../../users/data/schema/users";
import {selectedUserSelector} from "../../users/state/users.selectors";

@Component({
  selector: 'app-filtered-user-posts',
  templateUrl: './filtered-user-posts.component.html',
  styleUrls: ['./filtered-user-posts.component.scss']
})
export class FilteredUserPostsComponent implements OnInit{

  public selectUserPosts$: Observable<Post[]>;
  public status$: Observable<StatusEnum>;

  public selectedUser$: Observable<User | undefined>;

  constructor(private _store: Store<AppState>) {
    this.selectUserPosts$ = this._store.select(selectUsersPosts);
    this.status$ = this._store.select(statusSelector);
    this.selectedUser$ = this._store.select(selectedUserSelector);
  }

  public ngOnInit(): void {
    this._store.dispatch(postsActions.getPosts());
  }

}

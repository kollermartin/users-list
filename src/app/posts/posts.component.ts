import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Post} from "./data/schema/post";
import {postsSelector, statusSelector} from "./state/posts.selectors";
import {AppState} from "../shared/app-state";
import * as postsActions from "./state/posts.actions";
import {StatusEnum} from "../shared/status-enum";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{
  public posts$: Observable<Post[]>
  public status$: Observable<StatusEnum>;

  constructor(private _store: Store<AppState>) {
    this.posts$ = this._store.select(postsSelector);
    this.status$ = this._store.select(statusSelector);
  }

  public ngOnInit(): void {
    this._store.dispatch(postsActions.getPosts());
  }
}

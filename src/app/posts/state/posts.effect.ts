import {Actions, createEffect, ofType} from "@ngrx/effects";
import {PostsApiService} from "../data/service/posts-api.service";
import {catchError, map, of, switchMap} from "rxjs";
import * as postsActions from "./posts.actions";
import {Post} from "../data/schema/post";
import {Injectable} from "@angular/core";

@Injectable()
export class PostsEffect {
  $getPosts = createEffect(() => this.actions.pipe(
    ofType(postsActions.getPosts),
    switchMap(() => this._api.getPosts().pipe(
      map((posts: Post[]) => postsActions.getPostsSuccess({posts: [...posts]})),
      catchError(error => of(postsActions.getPostsFailure({error: error.message})))
    ))
  ))

  constructor(private _api: PostsApiService, private actions: Actions) {
  }
}

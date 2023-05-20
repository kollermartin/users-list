import {PostsState} from "../data/schema/post";
import {createReducer, on} from "@ngrx/store";
import * as PostsActions from "./posts.actions";
import {StatusEnum} from "../../shared/status-enum";

export const initialState: PostsState = {
  status: StatusEnum.PENDING,
  posts: [],
  error: '',
}

export const postsReducer = createReducer(
  initialState,
  on(PostsActions.getPosts, state => ({...state, status: StatusEnum.LOADING})),
  on(PostsActions.getPostsSuccess, (state, {posts}) => ({...state, posts: posts, status: StatusEnum.SUCCESS})),
  on(PostsActions.getPostsFailure, (state, {error}) => ({...state, error: error, status: StatusEnum.ERROR}))
)

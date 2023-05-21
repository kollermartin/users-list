import {AppState} from "../../shared/app-state";
import {createSelector} from "@ngrx/store";
import {PostsState} from "../data/schema/post";
import {UsersState} from "../../users/data/schema/users";

export const selectFeature = (state: AppState) => state.posts;

export const selectUser = (state: AppState) => state.users;

export const selectUsersPosts = createSelector(
  selectUser,
  selectFeature,
  (userState: UsersState, postsState: PostsState) => {
    if (userState.selectedUser && postsState.posts) {
      return postsState.posts.filter(post => post.userId === userState.selectedUser?.id);
    } else {
      return postsState.posts;
    }
  }
)

export const postsSelector = createSelector(
  selectFeature,
  (state: PostsState) => state.posts
)

export const errorSelector = createSelector(
  selectFeature,
  (state: PostsState) => state.error
)

export const statusSelector = createSelector(
  selectFeature,
  (state: PostsState) => state.status
)

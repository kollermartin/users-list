import {AppState} from "../../shared/app-state";
import {createSelector} from "@ngrx/store";
import {PostsState} from "../data/schema/post";

export const selectFeature = (state: AppState) => state.posts;

// export const selectAllPosts = (state: AppState) => state.posts.posts;
// export const selectAllUsers = (state: AppState) => state.users.users;
//
// export const usersHavingPosts = createSelector(
//   selectAllPosts,
//   selectAllUsers,
//   ()
// )

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

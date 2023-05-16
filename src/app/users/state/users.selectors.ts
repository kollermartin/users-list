import {UsersState} from "../data/schema/users";
import {createSelector} from "@ngrx/store";

export interface AppState {
  users: UsersState
}

export const selectFeature = (state: AppState) => state.users;
export const isLoadingSelector = createSelector(selectFeature, state => state.isLoading);

export const usersSelector = createSelector(selectFeature, state => state.users);

export const errorSelector = createSelector(selectFeature, state => state.error);

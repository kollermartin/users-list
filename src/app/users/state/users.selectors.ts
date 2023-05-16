import {createSelector} from "@ngrx/store";
import {AppState} from "../../shared/app-state";

export const selectFeature = (state: AppState) => state.users;
export const isLoadingSelector = createSelector(selectFeature, state => state.isLoading);

export const usersSelector = createSelector(selectFeature, state => state.users);

export const errorSelector = createSelector(selectFeature, state => state.error);

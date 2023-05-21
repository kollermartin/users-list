import {createReducer, on} from "@ngrx/store";
import {UsersState} from "../data/schema/users";
import * as UsersActions from './users.actions';

export const initialState: UsersState = {
  isLoading: false,
  users: [],
  error: '',
}

export const usersReducer = createReducer(
  initialState,
  on(UsersActions.getUsers, (state) => ({...state, isLoading: true})),
  on(UsersActions.getUsersSuccess, (state, action) => ({...state, isLoading: false, users: action.users})),
  on(UsersActions.getUsersFailure, (state, action) => ({...state, isLoading: false, error: action.error})),
  on(UsersActions.selectUser, (state, {user}) => ({...state, selectedUser: user})));

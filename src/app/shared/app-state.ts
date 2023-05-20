import {UsersState} from "../users/data/schema/users";
import {PostsState} from "../posts/data/schema/post";

export interface AppState {
  users: UsersState,
  posts: PostsState
}

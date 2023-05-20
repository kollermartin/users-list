import {StatusEnum} from "../../../shared/status-enum";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsState {
  status: StatusEnum;
  posts: Post[];
  error: string;
}

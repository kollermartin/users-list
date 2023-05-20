import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../schema/post";

@Injectable({
  providedIn: 'root'
})
export class PostsApiService {

  constructor(private _http: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    return this._http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}

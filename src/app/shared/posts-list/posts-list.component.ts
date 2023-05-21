import {Component, Input} from '@angular/core';
import {Post} from "../../posts/data/schema/post";
import {NgForOf} from "@angular/common";
import {PostComponent} from "../post/post.component";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
  imports: [
    NgForOf,
    PostComponent
  ],
  standalone: true
})
export class PostsListComponent {

  @Input() posts: Post[] | undefined;

}

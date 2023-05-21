import {Component, Input} from '@angular/core';
import {Post} from "../../posts/data/schema/post";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  imports: [
    NgIf
  ],
  standalone: true
})
export class PostComponent {

  @Input() post: Post | undefined;

}

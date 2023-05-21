import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {HomeComponent} from "./home/home.component";
import {PostsComponent} from "./posts/posts.component";
import {FilteredUserPostsComponent} from "./posts/filtered-user-posts/filtered-user-posts.component";

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: "full"},
  {path: 'users', component: UsersComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'user-posts', component: FilteredUserPostsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

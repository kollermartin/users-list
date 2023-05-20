import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from "@ngrx/effects";
import {UsersComponent} from './users/users.component';
import {UsersListComponent} from './users/users-list/users-list.component';
import {HttpClientModule} from "@angular/common/http";
import {usersReducer} from "./users/state/users.reducer";
import {UsersEffects} from "./users/state/users.effects";
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import {postsReducer} from "./posts/state/posts.reducer";
import {PostsEffect} from "./posts/state/posts.effect";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersListComponent,
    PostsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({users: usersReducer, posts: postsReducer}),
    EffectsModule.forRoot([UsersEffects, PostsEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

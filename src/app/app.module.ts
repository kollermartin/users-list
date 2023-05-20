import {isDevMode, NgModule} from '@angular/core';
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
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostComponent } from './posts/post/post.component';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersListComponent,
    PostsComponent,
    HomeComponent,
    PostsListComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({users: usersReducer, posts: postsReducer}),
    EffectsModule.forRoot([UsersEffects, PostsEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

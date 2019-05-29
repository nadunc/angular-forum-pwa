import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {PostListComponent} from './components/post-list/post-list.component';
import {MainLayoutComponent} from './components/main-layout/main-layout.component';
import {TopMenuComponent} from './components/top-menu/top-menu.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {FooterComponent} from './components/footer/footer.component';
import {PostListItemComponent} from './components/post-list-item/post-list-item.component';
import {PostComponent} from './components/post/post.component';
import {CommentComponent} from './components/comment/comment.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {PostPageComponent} from './components/post-page/post-page.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './state/reducers';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    MainLayoutComponent,
    TopMenuComponent,
    SidebarComponent,
    FooterComponent,
    PostListItemComponent,
    PostComponent,
    CommentComponent,
    SignInComponent,
    HomePageComponent,
    PostPageComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {metaReducers}),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

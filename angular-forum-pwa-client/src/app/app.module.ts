import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PostListComponent } from './post-list/post-list.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';

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
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

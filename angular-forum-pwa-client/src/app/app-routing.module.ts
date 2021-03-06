import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostListComponent} from './components/post-list/post-list.component';
import {PostComponent} from './components/post/post.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {PostPageComponent} from './components/post-page/post-page.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {AddPostComponent} from './components/add-post/add-post.component';
import {AuthGuardService} from './services/auth-guard.service';
import {AdminComponent} from './components/admin/admin.component';
import {RoleGuardService} from './services/role-guard.service';
import {ErrorUnauthorizedComponent} from './components/error-unauthorized/error-unauthorized.component';
import {ErrorNotFoundComponent} from './components/error-not-found/error-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent,

  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'post',
    component: PostPageComponent
  },
  {
    path: 'add-post',
    component: AddPostComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [RoleGuardService],
    data: {
      permittedRoles: ['ADMIN']
    }
  },
  {
    path: 'unauthorized',
    component: ErrorUnauthorizedComponent,
  },
  {
    path: '**',
    component: ErrorNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

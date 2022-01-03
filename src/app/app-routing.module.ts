import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BeerViewComponent} from './beer-view/beer-view.component';
import {AuthComponent} from './auth/auth.component';
import {BeerDetailComponent} from './beer-detail/beer-detail.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuard} from './guard/auth.guard';
import {EditBeerComponent} from './edit-beer/edit-beer.component';
import {UserListComponent} from './user-list/user-list.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'beers',
    component: BeerViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'beers/:id',
    component: BeerDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'edit',
    component: EditBeerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: BeerViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BeerViewComponent} from './beer-view/beer-view.component';
import {AuthComponent} from './auth/auth.component';
import {BeerDetailComponent} from './beer-detail/beer-detail.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'beers',
    component: BeerViewComponent,
  },
  {
    path: 'beers/:id',
    component: BeerDetailComponent,
  },
  {
    path: '',
    component: BeerViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

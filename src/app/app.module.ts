import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BeerComponent} from './beer/beer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BeerService} from './services/beer.service';
import { AuthComponent } from './auth/auth.component';
import { BeerViewComponent } from './beer-view/beer-view.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './services/auth.service';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AuthGuard} from './guard/auth.guard';
import { EditBeerComponent } from './edit-beer/edit-beer.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserService} from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    AuthComponent,
    BeerViewComponent,
    BeerDetailComponent,
    PageNotFoundComponent,
    EditBeerComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [BeerService, AuthService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}

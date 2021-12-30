import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BeerComponent} from './beer/beer.component';
import {FormsModule} from '@angular/forms';
import {BeerService} from './services/beer.service';
import { AuthComponent } from './auth/auth.component';
import { BeerViewComponent } from './beer-view/beer-view.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './services/auth.service';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AuthGuard} from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    AuthComponent,
    BeerViewComponent,
    BeerDetailComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [BeerService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}

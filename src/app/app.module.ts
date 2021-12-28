import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BeerComponent} from './beer/beer.component';
import {FormsModule} from '@angular/forms';
import {BeerService} from './services/beer.service';
import { AuthComponent } from './auth/auth.component';
import { BeerViewComponent } from './beer-view/beer-view.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    AuthComponent,
    BeerViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

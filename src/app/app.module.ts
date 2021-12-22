import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BeerComponent} from './beer/beer.component';
import {FormsModule} from '@angular/forms';
import {BeerService} from './services/beer.service';

@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

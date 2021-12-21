import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  beers = [];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 3000
    );
  }

  onAcheter() {
    console.log('J\'ai acheté toutes les bières');
  }
}

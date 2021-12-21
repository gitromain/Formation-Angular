import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  beers = [
    {
      name: 'Leffe',
      color: 'blonde',
      isAvailable: true
    },
    {
      name: 'Paix Dieux',
      color: 'rouge',
      isAvailable: true
    },
    {
      name: 'Cuvée des trolls',
      color: 'ambrée',
      isAvailable: false
    }
  ];

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

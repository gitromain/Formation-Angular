import {Component} from '@angular/core';
import {BeerColorEnum} from './shared/beer-color-enum.enum';

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
      color: BeerColorEnum.BLOND,
      isAvailable: true
    },
    {
      name: 'Paix Dieux',
      color: BeerColorEnum.RED,
      isAvailable: true
    },
    {
      name: 'Cuvée des trolls',
      color: BeerColorEnum.AMBER,
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

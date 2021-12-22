import {Component} from '@angular/core';
import {BeerColorEnum} from './shared/beer-color-enum.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  actualDate = new Date();

  beers = [
    {
      name: 'Leffe',
      color: BeerColorEnum.BLOND,
      isAvailable: true,
      price: 3.5
    },
    {
      name: 'Paix Dieux',
      color: BeerColorEnum.RED,
      isAvailable: true,
      price: 5
    },
    {
      name: 'Cuvée des trolls',
      color: BeerColorEnum.AMBER,
      isAvailable: false,
      price: 8
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

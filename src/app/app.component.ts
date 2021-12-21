import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  beerOne = 'Leffe';
  beerTwo = 'Paix Dieux';
  beerThree = 'Corbeau';

  beerColorOne = 'Rouge';
  beerColorTwo = 'Blonde';
  beerColorThree = 'Ambrée';

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

import {Component, OnInit} from '@angular/core';
import {BeerService} from './services/beer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isAuth = false;

  actualDate = new Date();

  beers: any[];

  constructor(private beerService: BeerService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 3000
    );
  }

  ngOnInit(): void {
        this.beers = this.beerService.beers;
  }


  onAcheter() {
    console.log('J\'ai acheté toutes les bières');
  }
}

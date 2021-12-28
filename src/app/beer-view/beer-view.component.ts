import { Component, OnInit } from '@angular/core';
import {BeerService} from '../services/beer.service';

@Component({
  selector: 'app-beer-view',
  templateUrl: './beer-view.component.html',
  styleUrls: ['./beer-view.component.scss']
})
export class BeerViewComponent implements OnInit {

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

  onRemplirTousLesFut(){
    this.beerService.remplirTousLesFut();
  }

}

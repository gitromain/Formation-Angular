import { Component, OnInit } from '@angular/core';
import {BeerService} from '../services/beer.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-beer-view',
  templateUrl: './beer-view.component.html',
  styleUrls: ['./beer-view.component.scss']
})
export class BeerViewComponent implements OnInit {

  isAuth = false;

  actualDate = new Date();

  beers: any[];
  beerSubscription: Subscription;

  constructor(private beerService: BeerService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 3000
    );
  }

  ngOnInit(): void {
    this.beerSubscription = this.beerService.beerSubject.subscribe(
      (beers: any[]) => {
        this.beers = beers;
      }
    );
    this.beerService.emitBeerSubject();
  }


  onAcheter() {
    console.log('J\'ai acheté toutes les bières');
  }

  onRemplirTousLesFut(){
    this.beerService.remplirTousLesFut();
  }

}

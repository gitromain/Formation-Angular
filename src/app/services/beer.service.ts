import { Injectable } from '@angular/core';
import {BeerColorEnum} from '../shared/beer-color-enum.enum';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  beerSubject = new Subject<any[]>();

  private beers = [
    {
      id: 1,
      name: 'Leffe',
      color: BeerColorEnum.BLOND,
      isAvailable: true,
      price: 3.5
    },
    {
      id: 2,
      name: 'Paix Dieux',
      color: BeerColorEnum.RED,
      isAvailable: true,
      price: 5
    },
    {
      id: 3,
      name: 'Cuvée des trolls',
      color: BeerColorEnum.AMBER,
      isAvailable: false,
      price: 8
    }
  ];

  emitBeerSubject(){
    this.beerSubject.next(this.beers.slice());
  }

  getBeerById(id: number){
    return this.beers.find((beer) => {
      return beer.id === id;
    });
  }

  remplirTousLesFut(){
    for (const beer of this.beers) {
      beer.isAvailable = true;
    }
    this.emitBeerSubject();
  }

  remplirFut(index: number){
    this.beers[index].isAvailable = true;
    this.emitBeerSubject();
  }

  addBeer(beerName: string, beerPrice: number, beerColor: BeerColorEnum){
    const beerObject = {
      id: this.beers[(this.beers.length - 1)].id + 1,
      name: beerName,
      color: beerColor,
      isAvailable: true,
      price: beerPrice,
    };

    this.beers.push(beerObject);
    this.emitBeerSubject();

  }

  constructor() { }
}

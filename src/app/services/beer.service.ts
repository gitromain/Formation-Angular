import { Injectable } from '@angular/core';
import {BeerColorEnum} from '../shared/beer-color-enum.enum';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  beers = [
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

  getBeerById(id: number){
    return this.beers.find((beer) => {
      return beer.id === id;
    });
  }

  remplirTousLesFut(){
    for (const beer of this.beers) {
      beer.isAvailable = true;
    }
  }

  remplirFut(index: number){
    this.beers[index].isAvailable = true;
  }

  constructor() { }
}

import { Injectable } from '@angular/core';
import {BeerColorEnum} from '../shared/beer-color-enum.enum';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

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

  constructor() { }
}

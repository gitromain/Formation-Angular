import {Component, Input, OnInit} from '@angular/core';
import {BeerColorEnum} from '../shared/beer-color-enum.enum';
import {BeerService} from '../services/beer.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  @Input()
  beerName: string;

  @Input()
  beerColor: BeerColorEnum;

  @Input()
  isAvailable: boolean;

  @Input()
  price: number;

  @Input()
  index: number;

  constructor(private beerService: BeerService) {
  }

  ngOnInit(): void {
  }

  getBeerColor(){
    return this.beerColor;
  }

  getBeerColorStyle() {
    switch (this.beerColor){
      case BeerColorEnum.AMBER:
        return 'brown';
      case BeerColorEnum.WHITE:
        return 'white';
      case BeerColorEnum.BLOND:
          return 'yellow';
      case BeerColorEnum.RED:
        return 'red';
    }
  }

  onRemplirFut(){
    this.beerService.remplirFut(this.index);
  }
}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  @Input()
  beerName: string;

  beerColor = 'Blonde';

  constructor() {
  }

  ngOnInit(): void {
  }

  getBeerColor(){
    return this.beerColor;
  }

}

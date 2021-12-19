import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  beerName = 'Paix dieux';
  beerColor = 'Blonde';

  constructor() {
  }

  ngOnInit(): void {
  }

  getBeerColor(){
    return this.beerColor;
  }

}

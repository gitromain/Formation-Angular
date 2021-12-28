import {Component, OnInit} from '@angular/core';
import {BeerService} from '../services/beer.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit {

  name = 'Leffe';
  price = 2;

  constructor(private beerService: BeerService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.name = this.route.snapshot.params['id'];
    this.name = this.beerService.getBeerById(+id).name;
    this.price = this.beerService.getBeerById(+id).price;
  }

}

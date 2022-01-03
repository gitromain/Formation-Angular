import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BeerService} from '../services/beer.service';
import {Router} from '@angular/router';
import {BeerColorEnum} from '../shared/beer-color-enum.enum';

@Component({
  selector: 'app-edit-beer',
  templateUrl: './edit-beer.component.html',
  styleUrls: ['./edit-beer.component.scss']
})
export class EditBeerComponent implements OnInit {

  constructor(private beerService: BeerService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const beeName = form.value['name'];
    const beerPrice = form.value['price'];
    const beerColor = BeerColorEnum[form.value['color']];
    this.beerService.addBeer(beeName, beerPrice, beerColor);
    this.router.navigate(['/beers']);
  }
}

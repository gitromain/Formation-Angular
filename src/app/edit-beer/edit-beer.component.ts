import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-beer',
  templateUrl: './edit-beer.component.html',
  styleUrls: ['./edit-beer.component.scss']
})
export class EditBeerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
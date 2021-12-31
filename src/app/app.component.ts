import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  secondes: number;
  counterSubscription: Subscription;

  ngOnInit() {
    const cpt = interval(1000);
    this.counterSubscription = cpt.subscribe(
      (value: number) => {
        this.secondes = value;
      },
      (error: any) => {
        console.log('error');
      },
      () => {
        console.log('done');
      }
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observable.component.html',
})
export class ObservablesComponent implements OnInit {
  title = 'Angular Observable using RxJs - Getting Started';

  obs = new Observable((observer) => {
    observer.next('1');
    observer.next('2');
    observer.next('3');

    observer.complete();
  });

  data: string[] = [];

  ngOnInit() {
    console.clear();

    this.obs.subscribe(
      (val) => {
        console.log(val);
      },
      (error) => {
        console.log('error');
      },
      () => {
        console.log('Completed');
      }
    );
  }
}

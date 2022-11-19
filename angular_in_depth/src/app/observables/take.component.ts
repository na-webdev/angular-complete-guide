import { Component, OnInit, VERSION } from '@angular/core';
import { of, interval, Subject, Observable, takeLast } from 'rxjs';
import { take, takeUntil, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  template:
    '<h1>TakeUntil Example</h1>\n' +
    ' \n' +
    '<button (click)="stopObs()">Stop</button>\n' +
    '<br>',
})
export class TakeComponent implements OnInit {
  notifier = new Subject();
  values = [1, 2, 3, 1, 2, 3, 1, 2, 3];
  obs0 = interval(1000).pipe(takeUntil(this.notifier));
  obs1 = of(...this.values).pipe(takeWhile((val) => val < 3));
  obs2 = of(...this.values).pipe(takeWhile((val) => val < 3, true));
  obs3 = of(...this.values).pipe(take(1));
  obs4 = of(...this.values).pipe(takeLast(2));

  ngOnInit() {
    this.obs0.subscribe((val) => console.log(val, 'takeUntil'));
    this.obs1.subscribe((val) => console.log(val, 'takeWhile'));
    this.obs2.subscribe((val) => console.log(val, 'takeWhile(inclusive)'));
    this.obs3.subscribe((val) => console.log(val, 'take'));
    this.obs4.subscribe((val) => console.log(val, 'takeLast'));
  }

  stopObs() {
    this.notifier.next(true);
    this.notifier.complete();
  }
}

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { of, from, fromEvent, interval, Observable, exhaustMap } from 'rxjs';
import { HasEventTargetAddRemove } from 'rxjs/internal/observable/fromEvent';
import { switchMap, map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-exhaust-map',
  template: ` <button #button>Exhaust Map</button>`,
})
export class ExhaustMapComponent implements AfterViewInit {
  @ViewChild('button', { static: true }) button: {
    nativeElement:
      | HasEventTargetAddRemove<any>
      | ArrayLike<HasEventTargetAddRemove<any>>;
  };
  clicks$: Observable<any>;
  count = 0;

  ngAfterViewInit() {
    this.clicks$ = fromEvent(this.button.nativeElement, 'click');
    this.exhaustMapExample3();
  }

  delayedObs(count: number) {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(count + ' A');
      }, 1000);
      setTimeout(() => {
        observer.next(count + ' B');
      }, 2000);
      setTimeout(() => {
        observer.next(count + ' C');
      }, 3000);
      setTimeout(() => {
        observer.next(count + ' D');
      }, 4000);
      setTimeout(() => {
        observer.next(count + ' E');
        observer.complete();
      }, 5000);
    });
  }

  exhaustMapExample3() {
    let obs = this.clicks$
      .pipe(
        exhaustMap(() => {
          this.count = this.count + 1;
          return this.delayedObs(this.count);
        })
      )
      .subscribe((val) => console.log(val));
  }
}

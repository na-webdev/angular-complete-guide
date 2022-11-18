import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { of, from, fromEvent, interval, Observable } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-switchMap',
  template: `<button #button>Switch map</button>`,
})
export class MapSwitchMapComponent implements AfterViewInit {
  @ViewChild('button', { static: true }) button: { nativeElement: any };
  clicks$: Observable<any>;

  ngAfterViewInit() {
    this.clicks$ = fromEvent(this.button.nativeElement, 'click');
    this.switchExample();
  }

  switchExample() {
    this.clicks$
      .pipe(
        switchMap(() => {
          return interval(500);
        })
      )
      .subscribe((val) => console.log(val));
  }
}

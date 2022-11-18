import { Component, OnInit } from '@angular/core';
import { filter, map, of, tap } from 'rxjs';

@Component({ selector: 'app-pipe-tap-filter-map', template: '<p></p>' })
export class PipeTapFilterMapComponent implements OnInit {
  ngOnInit() {
    of(1, 2, 3, 4, 5)
      .pipe(
        filter((val) => val % 2 === 0),
        tap((val) => {
          console.log('before ' + val);
        }),
        map((val) => {
          return val + 5;
        }),
        tap((val) => {
          console.log('after ' + val);
        })
      )
      .subscribe((val) => console.log(val));
  }
}

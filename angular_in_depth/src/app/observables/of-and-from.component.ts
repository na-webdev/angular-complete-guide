import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-and-from',
  template: ` <h2>Of operator</h2> `,
})
export class OfAndFromComponent implements OnInit {
  ngOnInit() {
    const arr = [1, 2, 3, 4, 5];
    const observableOf = of(arr);
    const observableFrom = from(arr);

    observableOf.subscribe({
      next: (val: number[]) => console.log(val, '(of)'),
      error: (err: any) => console.log(err, '(of)'),
      complete: () => console.log('Completed', '(of)'),
    });

    observableFrom.subscribe({
      next(val: number) {
        console.log(val, '(from)');
      },
      error(err: any) {
        console.log(err, 'from');
      },
      complete() {
        console.log('Completed (from)');
      },
    });
  }
}

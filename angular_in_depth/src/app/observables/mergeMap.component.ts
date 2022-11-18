import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { of, fromEvent, Observable, mergeMap, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-merge-map',
  template: `<button #button>Merge map</button>
    <button (click)="MergeHTTPRequestWithFork()">
      MergeHTTPRequestWithFork
    </button>
    <div *ngFor="let breed of breedData; trackBy: breedByType">
      <div>
        <img [src]="breed[1].message" />
      </div>
      <ul>
        <ng-container *ngFor="let breed of breed[0].message">
          <li>{{ breed }}</li>
        </ng-container>
      </ul>
    </div>`,
})
export class MergeMapComponent implements AfterViewInit {
  @ViewChild('button', { static: true }) button: { nativeElement: any };
  clicks$: Observable<any>;
  count = 0;
  breedData: any = [];

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    this.clicks$ = fromEvent(this.button.nativeElement, 'click');
    this.mergeMapExample();
  }

  MergeHTTPRequestWithFork() {
    //const url='https://dog.ceo/api/breed/'+hound+'/list';

    of('hound', 'mastiff', 'retriever')
      .pipe(
        mergeMap((breed) => {
          const url1 = 'https://dog.ceo/api/breed/' + breed + '/list';
          const url2 = 'https://dog.ceo/api/breed/' + breed + '/images/random';

          let obs1 = this.http.get<any>(url1);
          let obs2 = this.http.get<any>(url2);

          return forkJoin(obs1, obs2);
        })
      )
      .subscribe((data) => {
        console.log(data);
        this.breedData.push(data);
      });
  }

  breedByType(index: any, breed: { message: any }[]) {
    return breed[1].message;
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

  mergeMapExample() {
    let obs = this.clicks$
      .pipe(
        mergeMap(() => {
          this.count = this.count + 1;
          return this.delayedObs(this.count);
        })
      )
      .subscribe((val) => console.log(val));
  }
}

import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Observable, of, from, fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-from-event',
  template: '<button #btn>fromEvent</button>',
})
export class FromEventComponent implements AfterViewInit, OnInit, OnDestroy {
  title = 'Angular fromEvent Example';

  @ViewChild('btn', { static: true }) button: ElementRef;

  buttonSubscription: Subscription;

  constructor(private elm: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.buttonClick();
  }

  buttonClick() {
    this.buttonSubscription = fromEvent(this.button.nativeElement, 'click')
      .pipe(debounceTime(300))
      .subscribe((res: any) => console.log(res));
  }

  ngOnDestroy() {
    this.buttonSubscription.unsubscribe();
  }
}

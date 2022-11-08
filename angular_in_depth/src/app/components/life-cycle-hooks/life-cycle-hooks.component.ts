import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-lch',
  templateUrl: 'life-cycle-hooks.component.html',
})
export class LifeCycleHooksComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() title: string;
  @Input() message: string;
  stateChanges: any;
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('NgOnChanges');
    console.log(changes);
    this.stateChanges = changes;
    console.log(this.message);
  }

  ngOnInit() {
    console.log('NgOnInit');
    this.message = 'Experimental component for lifecycle hooks';
    console.log(this.message);
  }

  ngDoCheck() {
    console.log('NgDoCheck');
  }

  orderOriginal = (
    a: KeyValue<string, any>,
    b: KeyValue<string, any>
  ): number => {
    return 0;
  };

  ngAfterContentInit() {
    console.log('NgAfterContentInit Content added');
  }

  ngAfterContentChecked() {
    console.log('NgAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('NgAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('NgAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('NgOnDestroy');
  }
}

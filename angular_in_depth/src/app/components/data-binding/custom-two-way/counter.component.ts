import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
@Component({
  selector: 'app-counter',
  template: `
    <div>
      <p>
        Count: {{ count }}
        <button (click)="increment()">Increment</button>
      </p>
    </div>
  `,
})
export class CounterComponent implements OnChanges {
  @Input() count: number = 0;
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();

  increment() {
    this.count++;
    console.log(this.count);
    this.countChange.emit(this.count);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}

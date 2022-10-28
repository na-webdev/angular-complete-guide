import { Component, Input, Output, EventEmitter } from '@angular/core';
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
export class CounterComponent {
  @Input() count: number = 0;
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();

  increment() {
    this.count++;
    console.log(this.count);
    this.countChange.emit(this.count);
  }
}

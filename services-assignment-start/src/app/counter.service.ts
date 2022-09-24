import { EventEmitter, Injectable, Output } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  count = 0

  @Output() countIncremented = new EventEmitter()

  increment() {
    this.count++
    this.countIncremented.emit()
  }
}

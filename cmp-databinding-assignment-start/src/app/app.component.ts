import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  message = 'Please, press start button to begin the game.'
  values = []

  onGameIsOn(value: number) {
    this.values.push(value)
  }

  onGameStop(text: string) {
    this.message =
      text + `${this.values[this.values.length - 1]}. Start to play again!`
    this.values = []
  }
}

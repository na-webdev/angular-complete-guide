import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() gameIsOn = new EventEmitter<number>()
  @Output() gameStopped = new EventEmitter<string>()
  start: number
  gameProcess: any

  constructor() {}

  ngOnInit(): void {}

  startGame() {
    this.start = 0
    this.gameProcess = setInterval(() => {
      this.gameIsOn.emit(++this.start)
    }, 1000)
  }

  stopGame() {
    this.gameStopped.emit('You stopped the game at ')
    clearInterval(this.gameProcess)

    this.start = 1
  }
}

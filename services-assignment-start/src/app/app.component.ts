import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { UsersService } from './users.service'
import { CounterService } from './counter.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges {
  activeUsers: string[]
  inactiveUsers: string[]
  count = 0

  constructor(
    private userService: UsersService,
    private counterService: CounterService
  ) {}

  ngOnInit() {
    this.activeUsers = this.userService.activeUsers
    this.inactiveUsers = this.userService.inactiveUsers
    this.counterService.countIncremented.subscribe(() => {
      this.count = this.counterService.count
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }
}

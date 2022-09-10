import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  disableAdding = true;
  serverCreationStatus = 'No server is being created';
  serverName = '';
  constructor() {
    setTimeout(() => {
      this.disableAdding = false;
    }, 3000);
  }

  ngOnInit(): void {}

  addNewServer() {
    alert('New server added');
    this.serverCreationStatus = 'Server created!';
  }

  updateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

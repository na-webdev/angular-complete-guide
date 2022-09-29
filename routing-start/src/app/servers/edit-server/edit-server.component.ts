import { Component, OnInit } from '@angular/core'

import { ServersService } from '../servers.service'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { CanComponentDeactivate } from '../../guards/can-deactivate.guard'

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number; name: string; status: string }
  serverName = ''
  serverStatus = ''
  allowEdit = false
  changesSaved = false

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot.fragment)
    console.log(this.route.snapshot.queryParams)
    this.route.queryParams.subscribe((queryParams: Params) => {
      console.log(queryParams['allowEdit'])
      this.allowEdit = queryParams['allowEdit'] === '1'
    })
    this.route.fragment.subscribe()
    this.server = this.serversService.getServer(1)
    this.serverName = this.server.name
    this.serverStatus = this.server.status
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    })
    this.changesSaved = true
    this.router.navigate(['../'], { relativeTo: this.route })
  }

  canDeactivate() {
    if (!this.allowEdit) {
      return true
    }
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaved
    ) {
      return confirm('Changes are not saved! Are you sure to leave?')
    }
    return true
  }
}

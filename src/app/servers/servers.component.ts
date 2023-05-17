import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent {
  isCreated = false;
  serverStatus = 'offline';
  serverName = '';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  onCreate() {
    this.isCreated = true;
    this.serverStatus = 'online';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}

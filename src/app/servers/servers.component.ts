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
  servers = ['testserver', 'testserver2'];

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  onCreate() {
    this.isCreated = true;
    this.serverStatus = 'online';
    this.servers.push(this.serverName);
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No severs created !!!';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus =
      'New server has been created! Name is ' + this.serverCreationStatus;
  }
  onUpdateServerName(event: any) {
    // console.log(event);
    this.serverCreationStatus = event.target.value;
  }
}

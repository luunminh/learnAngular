import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent {
  username: string = '';

  handleClick() {
    if (this.username.trim().length > 0) {
      this.username = '';
    }
  }
}

import { Component } from '@angular/core';
import { Logger } from './logger.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'My very first Project';
  message = 'Hello Angular';

  constructor(private logger: Logger) {}

  onAlertMsg() {
    this.logger.showMsg(this.message);
  }
}

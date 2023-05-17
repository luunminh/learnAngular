import { Component } from '@angular/core';
import { Logger } from './logger.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isHidden: boolean = true;
  clickCount: number[] = [];

  constructor() {}

  handleShow() {
    this.isHidden = !this.isHidden;
    const elm: number = this.clickCount.length + 1;
    this.clickCount.push(elm);
    console.log(this.clickCount);
  }
}

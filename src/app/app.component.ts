import { Component } from '@angular/core';
import { Logger } from './logger.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    onlyOdd: boolean = true;

    oddNumbers: number[] = [1, 3, 5];
    evenNumbers: number[] = [2, 4, 6];
}

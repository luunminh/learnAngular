import { Component, OnInit } from '@angular/core';
import { Logger } from './logger.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    user: { name: string} | null = null;
    isAppear : boolean = false
    constructor() {}

    ngOnInit(): void {}
}

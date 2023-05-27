import { Component } from '@angular/core';
import { Logger } from './logger.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    feature: string;

    constructor() {
        this.feature = 'recipe';
    }

    onNavigate(featureName: string) {
        this.feature = featureName;
    }
}

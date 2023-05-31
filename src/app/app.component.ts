import { Component } from '@angular/core';
import { Logger } from './logger.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    accounts = [
        {
            name: 'luu nhat minh',
            status: 'active',
        },
        {
            name: 'nguyen tuan kiet',
            status: 'inactive',
        },
        {
            name: 'nguyen vu ngoc linh',
            status: 'unknown',
        },
    ];

    onAccountAdded(newAccount: { name: string; status: string }) {
        this.accounts.push(newAccount);
    }

    onStatusChanged(updateInfo: { id: number; newStatus: string }) {
        this.accounts[updateInfo.id].status = updateInfo.newStatus;
    }
}

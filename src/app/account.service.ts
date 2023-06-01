import { Injectable } from "@angular/core";


@Injectable({providedIn: 'root'})
export class AccountService {
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
import { AccountService } from './../account.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
    @Input() account: { name: string; status: string } | undefined;
    @Input() id: number | undefined;

    constructor(private accountService: AccountService) {
    }
    onSetTo(newStatus: string) {
        if (this.id !== undefined)
            this.accountService.onStatusChanged({ id: this.id, newStatus });
        this.accountService.statusUpdate.emit(newStatus);
    }
}

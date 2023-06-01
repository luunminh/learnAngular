import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logger.service';
import { AccountService } from '../account.service';
@Component({
    selector: 'app-new-account',
    templateUrl: './new-account.component.html',
    styleUrls: ['./new-account.component.scss'],
    providers: [LoggingService],
})
export class NewAccountComponent {
    @Output() accountAdded = new EventEmitter<{
        name: string;
        status: string;
    }>();

    constructor(
        private loggingService: LoggingService,
        private accountService: AccountService
    ) {
        this.accountService.statusUpdate.subscribe((status: string) =>
            alert('New status ' + status)
        );
    }
    onCreateAccount(accountName: string, accountStatus: string) {
        this.accountService.onAccountAdded({
            name: accountName,
            status: accountStatus,
        });
        // this.loggingService.showMsg(accountStatus);
    }
}

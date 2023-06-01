import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logger.service';
import { AccountService } from '../account.service';
@Component({
    selector: 'app-new-account',
    templateUrl: './new-account.component.html',
    styleUrls: ['./new-account.component.scss'],
    providers: [LoggingService, AccountService],
})
export class NewAccountComponent {
    @Output() accountAdded = new EventEmitter<{
        name: string;
        status: string;
    }>();

    constructor(
        private loggingService: LoggingService,
        private accountService: AccountService
    ) {}
    onCreateAccount(accountName: string, accountStatus: string) {
        this.accountService.onAccountAdded({
            name: accountName,
            status: accountStatus,
        });
        this.loggingService.showMsg(accountStatus);
    }
}

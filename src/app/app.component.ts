import { AccountService } from './account.service';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [AccountService],
})
export class AppComponent implements OnInit {
    accounts: { name: string; status: string }[] = [];

    constructor(private accountService: AccountService) {}
    ngOnInit(): void {
        this.accounts = this.accountService.accounts;
    }
}

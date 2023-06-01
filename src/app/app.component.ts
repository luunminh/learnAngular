import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [AccountService],
})
export class AppComponent implements OnInit {
    activeUsers: string[] = [];
    inactiveUsers : string[] = [];
    constructor(private accountService: AccountService) {}
    ngOnInit(): void {
        this.activeUsers = this.accountService.activeUsers
        this.inactiveUsers = this.accountService.inactiveUsers
    }
}

import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
@Component({
    selector: 'app-active-account',
    templateUrl: './active-account.component.html',
    styleUrls: ['./active-account.component.scss'],
})
export class ActiveAccountComponent implements OnInit {
    @Input() users: string[] = [];
    constructor(private accountService: AccountService) {}
    ngOnInit(): void {
        // this.users = this.accountService.activeUsers;
    }

    onSetToInActive(id: number) {
        this.accountService.onChangeToInActive(id);
    }
}

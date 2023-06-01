import { AccountService } from './../account.service';
import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'app-inactive-account',
    templateUrl: './inactive-account.component.html',
    styleUrls: ['./inactive-account.component.scss'],
})
export class InactiveAccountComponent implements OnInit {
    @Input() users: string[] = [];

    constructor(private accountService: AccountService) {}
    ngOnInit(): void {
        // this.users = this.accountService.inactiveUser;
    }

    onSetToActive(id: number) {
        this.accountService.onChangeToActive(id);
    }
}

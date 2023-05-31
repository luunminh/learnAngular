import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
    @Input() account: { name: string; status: string } | undefined;
    @Input() id: number | undefined;
    @Output() statusChanged = new EventEmitter<any>();

    constructor() {}
    onSetTo(newStatus: string) {
        this.statusChanged.emit({ id: this.id, newStatus: newStatus });
        console.log('A server status changed, new status: ' + newStatus);
    }
}

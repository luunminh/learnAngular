import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AccountService {
    activeUsers = ['Toan', 'Minh', 'Phu'];
    inactiveUsers = ['Tram', 'Linh', 'Anh'];

    onChangeToInActive(userId: number) {
        this.inactiveUsers.push(this.activeUsers[userId]);
        this.activeUsers.splice(userId, 1);
    }

    onChangeToActive(userId: number) {
        this.activeUsers.push(this.inactiveUsers[userId]);
        this.inactiveUsers.splice(userId, 1);
    }
}

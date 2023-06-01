import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggingService {
    showMsg(msg: string) {
        console.log('A new status has change: ' + msg);
    }
}

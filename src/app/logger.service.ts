import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Logger {
    showMsg(msg: string) {
        alert(msg);
    }
}

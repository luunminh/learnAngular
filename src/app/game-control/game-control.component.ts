import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.scss'],
})
export class GameControlComponent {
    @Output() intervalFired = new EventEmitter<number>();
    interval: any;
    count: number = 0;

    onStartGame() {
        this.interval = setInterval(() => {
            this.intervalFired.emit(++this.count);
        }, 1000);
    }
    onPauseGame() {
        clearInterval(this.interval)
    }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
    @Input() value: number = 0;
    @Output() valueChange = new EventEmitter<number>();

    onChangeValue(event : any) {
        this.valueChange.emit(event.target.value);
        console.log(event.target.value);

    }
}

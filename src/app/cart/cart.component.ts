import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
    @Input() selectedProduct: { name: string; quantity: number } | undefined;
    @Output() triggerIncrease = new EventEmitter<any>();
    @Output() triggerDecrease = new EventEmitter<any>();
    onIncrease() {
        this.triggerIncrease.emit();
    }

    onDecrease() {
        this.triggerDecrease.emit();
    }
}

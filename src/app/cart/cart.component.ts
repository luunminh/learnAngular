import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartProduct } from '../product-list/product-list.component';
@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
    @Input() cartProducts: CartProduct[] = [];
    @Output() triggerIncrease = new EventEmitter<any>();
    @Output() triggerDecrease = new EventEmitter<any>();
    onIncrease(id: number) {
        this.triggerIncrease.emit(id);
    }

    onDecrease(id: number) {
        this.triggerDecrease.emit(id);
    }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
    @Input() product: any;
    @Output() addToCart = new EventEmitter<any>();

    onAddToCart() {
        this.addToCart.emit(this.product);
    }
}

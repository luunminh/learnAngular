import { Component } from '@angular/core';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
    products: Product[] = [
        {
            id: 1,
            name: 'HP Omen',
            price: 200000,
        },
        {
            id: 2,
            name: 'Lenovo Ideapad',
            price: 200000,
        },
        {
            id: 3,
            name: 'Macbook Pro 14 inch',
            price: 200000,
        },
        {
            id: 4,
            name: 'Macbook Air M1',
            price: 300000,
        },
        {
            id: 5,
            name: 'Lenovo legion 5',
            price: 200000,
        },
        {
            id: 6,
            name: 'Mac mini m1',
            price: 200000,
        },
        {
            id: 7,
            name: 'Macbook Pro 2019',
            price: 200000,
        },
        {
            id: 8,
            name: 'MSI GF63',
            price: 200000,
        },
        {
            id: 9,
            name: 'Acer nitro 5',
            price: 200000,
        },
        {
            id: 10,
            name: 'Vivo v5',
            price: 400000,
        },
    ];
    cartProduct: CartProduct | undefined;

    selectedProduct: Product | undefined;

    selectProduct(product: Product) {
        console.log('aaa');

        this.selectedProduct = product;
    }
    onAddToCart(product: Product) {
        const { id, name } = product;

        if (this.cartProduct) {
            if (this.cartProduct.id === id) {
                this.cartProduct = {
                    ...this.cartProduct,
                    quantity: this.cartProduct.quantity + 1,
                };
            } else {
                this.cartProduct = {
                    id,
                    name,
                    quantity: 1,
                };
            }
        } else {
            this.cartProduct = {
                id,
                name,
                quantity: 1,
            };
        }
    }

    onIncreaseItem() {
        if (this.cartProduct)
            this.cartProduct = {
                ...this.cartProduct,
                quantity: this.cartProduct.quantity + 1,
            };
    }

    onDecreaseItem() {
        if (this.cartProduct) {
            if (this.cartProduct.quantity > 1) {
                this.cartProduct = {
                    ...this.cartProduct,
                    quantity: this.cartProduct.quantity - 1,
                };
            } else {
                this.cartProduct = undefined;
            }
        }
    }
}

export interface Product {
    id: number;
    name: string;
    price: number;
}

export interface CartProduct {
    id: number;
    name: string;
    quantity: number;
}

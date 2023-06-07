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
    selectedProduct: Product | undefined;

    cartProducts: CartProduct[] = [];

    onSelectProduct(product: Product) {
        this.selectedProduct = product;
    }

    onAddToCart(product: Product) {
        const { id, name, price } = product;

        if (this.cartProducts.length === 0) {
            this.cartProducts = [
                ...this.cartProducts,
                { id, name, price, quantity: 1 },
            ];
            this.cartProducts.push();
        } else {
            if (this.getCartItemById(id)) {
                this.cartProducts = this.cartProducts.map((item) => {
                    if (item.id === id) {
                        item.quantity += 1;
                    }
                    return item;
                });
            } else {
                this.cartProducts = [
                    ...this.cartProducts,
                    { id, name, price, quantity: 1 },
                ];
            }
        }
    }

    getCartItemById(id: number) {
        const rs = this.cartProducts.find((item) => item.id === id);
        return rs;
    }

    onIncreaseItem(id: number) {
        this.cartProducts = this.cartProducts.map((item) => {
            if (item.id === id) {
                item.quantity += 1;
            }
            return item;
        });
    }

    onDecreaseItem(id: number) {
        if (this.getCartItemById(id)?.quantity === 1) {
            this.cartProducts = this.cartProducts.filter(
                (item) => item.id !== id
            );
        } else {
            this.cartProducts = this.cartProducts.map((item) => {
                if (item.id === id) {
                    item.quantity -= 1;
                }
                return item;
            });
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
    price: number;
    quantity: number;
}

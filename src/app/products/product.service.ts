import { Injectable } from '@angular/core';

interface Product {
    name: string;
    description: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
    products: Product[] = [
        {
            name: 'Monsgeek m1',
            description: 'Mechanical gaming keyboard',
        },
        {
            name: 'Monsgeek m2',
            description: 'Mechanical gaming keyboard v2022',
        },
    ];

    getProducts() {
        return this.products.slice();
    }
}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
    products: any[] = [];

    constructor(private productsService: ProductService) {}

    ngOnInit(): void {
        this.products = this.productsService.getProducts();
    }
}

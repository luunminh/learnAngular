import { Component } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { CartComponent } from './cart/cart.component';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(private dialog: Dialog) {}

    openCart() {
        const dialogRef = this.dialog.open(CartComponent);
    }
}

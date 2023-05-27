import { Ingredient } from './../shared/ingredient.model';
import { Component } from '@angular/core';
@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Banana', 10),
    ];
    onIngredientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
}

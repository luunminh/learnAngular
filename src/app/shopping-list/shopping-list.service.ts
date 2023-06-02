import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Injectable({ providedIn: 'root' })
export class ShoppingListService {
    ingredientChanged = new EventEmitter<Ingredient[]>();
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Banana', 10),
    ];

    getIngredient() {
        return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        console.log(this.ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}

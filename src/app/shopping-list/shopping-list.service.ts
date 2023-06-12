import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class ShoppingListService {
    ingredientChanged = new Subject<Ingredient[]>();
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
        this.ingredientChanged.next(this.ingredients.slice());
    }
}

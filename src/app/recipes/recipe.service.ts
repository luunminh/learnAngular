import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class RecipeService {
    recipeSelected = new Subject<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A test recipe',
            'This is a sample test',
            'https://daylambanh.edu.vn/wp-content/uploads/2020/10/cong-thuc-lam-hamburger.jpg',
            [new Ingredient('test', 1), new Ingredient('bread', 2)]
        ),
        new Recipe(
            'A Beef Hamburger',
            'This is a new Hamburger',
            'https://daylambanh.edu.vn/wp-content/uploads/2020/10/cong-thuc-lam-hamburger.jpg',
            [new Ingredient('meat', 1), new Ingredient('bread', 2)]
        ),
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipeById(id: number) {
        return this.recipes.slice()[id];
    }
}

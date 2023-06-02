import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
@Injectable({ providedIn: 'root' })
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>()

    private recipes: Recipe[] = [
        new Recipe(
            'A test recipe',
            'This is a sample test',
            'https://daylambanh.edu.vn/wp-content/uploads/2020/10/cong-thuc-lam-hamburger.jpg'
        ),
        new Recipe(
            'A Beef Hamburger',
            'This is a new Hamburger',
            'https://daylambanh.edu.vn/wp-content/uploads/2020/10/cong-thuc-lam-hamburger.jpg'
        ),
    ];


    getRecipes() {
        return this.recipes.slice()
    }
}

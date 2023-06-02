import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { RecipeService } from './../recipe.service';
import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent {
    @Input('selectedRecipe') recipe: Recipe | undefined;

    constructor(private splService: ShoppingListService) {}

    addRecipeToCart(ingredients: Ingredient[]) {
        ingredients.forEach((ingredient: Ingredient) => {
            this.splService.addIngredient(ingredient);
        });
    }
}

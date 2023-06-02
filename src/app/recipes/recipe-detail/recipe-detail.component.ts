import { RecipeService } from './../recipe.service';
import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent {
    @Input('selectedRecipe') recipe: Recipe = new Recipe('', '', '');

    // constructor(private recipeService : RecipeService) {}
}

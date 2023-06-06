import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { RecipeService } from './../recipe.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
    recipe: Recipe | undefined;
    paramsSubscription: Subscription | undefined;
    id: number | undefined;
    constructor(
        private rcpService: RecipeService,
        private splService: ShoppingListService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.id = +this.route.snapshot.params['id'];
        this.recipe = this.rcpService.getRecipeById(+this.id);

        this.paramsSubscription = this.route.params.subscribe(
            (params: Params) => {
                this.id = params['id'];
                if (this.id)
                    this.recipe = this.rcpService.getRecipeById(this.id);
            }
        );
    }
    ngOnDestroy(): void {
        if (this.paramsSubscription) this.paramsSubscription.unsubscribe();
    }

    addRecipeToCart(ingredients: Ingredient[]) {
        ingredients.forEach((ingredient: Ingredient) => {
            this.splService.addIngredient(ingredient);
        });
    }

    onEditRecipe() {
        this.router.navigate(['../', this.id, 'edit'], {
            relativeTo: this.route,
        });
    }
}

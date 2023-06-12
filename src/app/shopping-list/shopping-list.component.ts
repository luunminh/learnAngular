import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';
@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[] = [];
    constructor(private shoppingListService: ShoppingListService) {}
    private igChangeSub: Subscription;
    ngOnInit(): void {
        this.ingredients = this.shoppingListService.getIngredient();
        this.igChangeSub = this.shoppingListService.ingredientChanged.subscribe(
            (newIngredients: Ingredient[]) => {
                this.ingredients = newIngredients;
            }
        );
    }

    ngOnDestroy(): void {
        this.igChangeSub.unsubscribe();
    }
}

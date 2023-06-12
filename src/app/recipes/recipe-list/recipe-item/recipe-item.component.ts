import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
    @Input() recipe: Recipe | undefined;
    @Input() idx: number | undefined;

    constructor(
        private recipeService: RecipeService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    onSelected() {
        this.router.navigate([`${this.idx}`], {relativeTo: this.route});
        this.recipeService.recipeSelected.next(this.recipe);
    }
}

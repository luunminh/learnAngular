import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is a sample test',
      'https://daylambanh.edu.vn/wp-content/uploads/2020/10/cong-thuc-lam-hamburger.jpg'
    ),
  ];
}

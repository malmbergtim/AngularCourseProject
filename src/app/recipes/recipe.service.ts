import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { shoppingListService } from "../shopping-list/shopping-list.service"; 
@Injectable()

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[]= [
        new Recipe('Kött och Strips',
         'En fin måltid',
          'https://www.acouplecooks.com/wp-content/uploads/2019/05/Garlic-Butter-Shrimp-026.jpg',
          [
              new Ingredient('kött', 1),
              new Ingredient('Strips', 20)

          ]),
        new Recipe('Vitlöksbröd',
         'Ett fint vitlöksbröd',
          'https://www.acouplecooks.com/wp-content/uploads/2019/05/Garlic1-Butter-Shrimp-026.jpg',
          [
              new Ingredient('vitlök', 2),
              new Ingredient('smör', 2)
          ])
      ];

      constructor(private slService: shoppingListService) {

      }


      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
        console.log(this.addIngredientsToShoppingList)
      }

      getRecipe(index: number) {
    return this.recipes[index];
      }

      addRecipe(recipe: Recipe) {
      this.recipes.push(recipe)
      }

      updateRecipe(index: number, newRecipe: Recipe) {
      this.recipes[index] = newRecipe
      }

}
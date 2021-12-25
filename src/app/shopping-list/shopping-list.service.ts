import { Ingredient } from '../shared/ingredient.model'
import { Subject } from 'rxjs'
export class shoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5), 
        new Ingredient('Cucumber', 10)
    
      ];

      getIngredients() {
        return this.ingredients;
      }

      getIngredient(index: number) {
      return this.ingredients[index]
      }

      addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]) {
      for (let item of ingredients) {
        this.addIngredient(item)
        this.ingredientsChanged.next(this.ingredients.slice())
      }
      }

      updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice())
      }

      deleteIngredient(index: number) {
      this.ingredients.splice(index, 1)
      this.ingredientsChanged.next(this.ingredients.slice())

      }
}
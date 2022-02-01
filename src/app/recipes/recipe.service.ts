import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test','https://www.maxpixel.net/static/photo/2x/Borsch-A-Simple-Recipe-Cook-At-Home-Food-4260907.jpg', [
            new Ingredient('Meat', 1), new Ingredient('Potatoe', 1), new Ingredient('Cheese', 3)
        ])
      ];
    constructor(private shoppingListService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList( ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

}
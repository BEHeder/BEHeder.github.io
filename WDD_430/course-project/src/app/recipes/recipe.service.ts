import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 
            'This is simply a test', 
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg', 
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe('Big Fat Burger', 
            'This is simply a test', 
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg', 
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];

    constructor(private slService: ShoppingListService) {}
    
    getRecipes() {
        return this.recipes.slice(); //This way, we only get a copy of the array, not the array itself.
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
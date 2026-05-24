// Step 1b: GetRecipesResponseModel
// Here I am creating the GetRecipesResponseModel interface.
// When I call https://dummyjson.com/recipes, the API does not return
// just an array of recipes. It returns a wrapper object that looks like:
// { recipes: [...], total: 50, skip: 0, limit: 30 }
// So I need this model to represent the full response, not just the recipes array.
// The recipes field uses the RecipeModel I created in the previous file,
// which means each item inside the array will be strongly typed as well.

import { RecipeModel } from './recipe.model';

export interface GetRecipesResponseModel {
  recipes: RecipeModel[];  // the array of recipe objects returned by the API
  total: number;           // total number of recipes available in the API (50)
  skip: number;            // how many recipes were skipped - used for pagination
  limit: number;           // how many recipes were returned in this response (30)
}

console.log('=== get-recipes-response.model.ts loaded ===');
console.log('GetRecipesResponseModel interface is ready to use');
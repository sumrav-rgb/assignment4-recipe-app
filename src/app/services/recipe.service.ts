// recipe.service.ts
// This service makes a GET call to the DummyJSON API and returns recipe data.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { RecipeModel } from '../models/recipe.model';
import { GetRecipesResponseModel } from '../models/get-recipes-response.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipesUrl = `${environment.apiUrl}/recipes`;

  constructor(private http: HttpClient) {
    console.log('=== RecipeService initialized ===');
    console.log('RecipeService: HttpClient injected successfully via Angular DI');
    console.log('RecipeService: API endpoint set to:', this.recipesUrl);
  }

  // GET call function - fetches all recipes from the DummyJSON API
  getRecipes(): Observable<RecipeModel[]> {
    console.log('--- RecipeService.getRecipes() called ---');
    console.log('RecipeService: Sending HTTP GET request to:', this.recipesUrl);

    return this.http.get<GetRecipesResponseModel>(this.recipesUrl).pipe(
      map((response: GetRecipesResponseModel) => {
        console.log('--- RecipeService: GET call successful ---');
        console.log('RecipeService: Full API response received:', response);
        console.log('RecipeService: Total recipes available in API:', response.total);
        console.log('RecipeService: Recipes returned in this response:', response.limit);
        console.log('RecipeService: Recipes skipped (pagination):', response.skip);
        console.log('RecipeService: Extracting recipes array from response...');
        console.log('RecipeService: Recipes array length:', response.recipes.length);
        console.log('RecipeService: First recipe in array:', response.recipes[0]);
        console.log('RecipeService: Last recipe in array:', response.recipes[response.recipes.length - 1]);
        return response.recipes;
      }),
      catchError((error) => {
        console.error('--- RecipeService: GET call FAILED ---');
        console.error('RecipeService: Error status:', error.status);
        console.error('RecipeService: Error message:', error.message);
        console.error('RecipeService: Full error object:', error);
        return throwError(() => error);
      })
    );
  }

  // GET call function - returns the full response including pagination fields
  getRecipesResponse(): Observable<GetRecipesResponseModel> {
    console.log('--- RecipeService.getRecipesResponse() called ---');
    console.log('RecipeService: Sending HTTP GET request to:', this.recipesUrl);
    return this.http.get<GetRecipesResponseModel>(this.recipesUrl);
  }
}
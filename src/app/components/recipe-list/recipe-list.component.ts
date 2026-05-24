// recipe-list.component.ts
// This component fetches recipes using RecipeService and displays them in a grid.

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';
import { RecipeModel } from '../../models/recipe.model';
import { RecipeComponent } from '../recipe/recipe.component';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RecipeComponent],
  template: `
    <div class="container py-4">

      <div class="row mb-4">
        <div class="col">
          <h1 class="fw-bold">🍽️ Recipe Collection</h1>
          <p class="text-muted" *ngIf="!isLoading && !errorMessage">
            Showing {{ recipes.length }} recipes from DummyJSON API
          </p>
        </div>
      </div>

      <!-- Bootstrap spinner while GET call is in progress -->
      <div class="row" *ngIf="isLoading">
        <div class="col text-center py-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <p class="mt-3 text-muted">Fetching recipes from API...</p>
        </div>
      </div>

      <!-- Error alert if GET call fails -->
      <div class="row" *ngIf="errorMessage">
        <div class="col">
          <div class="alert alert-danger" role="alert">
            <strong>Error:</strong> {{ errorMessage }}
          </div>
        </div>
      </div>

      <!-- Bootstrap responsive recipe card grid -->
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
           *ngIf="!isLoading && !errorMessage">
        <div class="col" *ngFor="let recipe of recipes; let i = index">
          <app-recipe [recipe]="recipe"></app-recipe>
        </div>
      </div>

    </div>
  `
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(
    private recipeService: RecipeService,
    private cdr: ChangeDetectorRef
  ) {
    console.log('=== RecipeListComponent initialized ===');
    console.log('RecipeListComponent: RecipeService injected successfully via Angular DI');
    console.log('RecipeListComponent: isLoading set to TRUE - spinner is showing');
  }

  ngOnInit(): void {
    console.log('--- RecipeListComponent.ngOnInit() called ---');
    console.log('RecipeListComponent: Calling recipeService.getRecipes()...');

    this.recipeService.getRecipes().subscribe({

      next: (data: RecipeModel[]) => {
        console.log('--- RecipeListComponent: GET call response received ---');
        console.log('RecipeListComponent: Number of recipes received:', data.length);
        console.log('RecipeListComponent: Storing recipes into recipes array...');

        this.recipes = data;
        this.isLoading = false;

        console.log('RecipeListComponent: recipes array populated successfully');
        console.log('RecipeListComponent: isLoading set to FALSE - spinner is hidden');
        console.log('RecipeListComponent: Forcing Angular change detection...');

        this.cdr.detectChanges();

        console.log('RecipeListComponent: View updated - recipes are now displayed');
        console.log('RecipeListComponent: Recipe names displayed on page:');
        this.recipes.forEach((recipe, index) => {
          console.log(`  ${index + 1}. ${recipe.name} (${recipe.cuisine}) - Rating: ${recipe.rating}`);
        });
      },

      error: (err) => {
        console.error('--- RecipeListComponent: GET call FAILED ---');
        console.error('RecipeListComponent: Error received:', err);
        this.errorMessage = 'Failed to load recipes. Please try again later.';
        this.isLoading = false;
        this.cdr.detectChanges();
        console.error('RecipeListComponent: Error message displayed to user');
      }
    });
  }
}
// recipe.component.ts
// This component displays a single recipe card using Bootstrap styling.

import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeModel } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card h-100 shadow-sm" *ngIf="recipe">
      <img [src]="recipe.image" [alt]="recipe.name" class="card-img-top recipe-img" />
      <div class="card-body d-flex flex-column">
        <h5 class="card-title fw-bold">{{ recipe.name }}</h5>
        <div class="mb-2">
          <span class="badge bg-primary me-1">{{ recipe.cuisine }}</span>
          <span class="badge me-1" [ngClass]="getDifficultyBadgeClass()">
            {{ recipe.difficulty }}
          </span>
        </div>
        <p class="card-text mb-1">
          <span class="text-warning">⭐</span>
          <strong>{{ recipe.rating }}</strong>
          <span class="text-muted ms-1">({{ recipe.reviewCount }} reviews)</span>
        </p>
        <div class="recipe-meta mb-2">
          <span class="me-3">🕒 Prep: {{ recipe.prepTimeMinutes }} min</span>
          <span class="me-3">🍳 Cook: {{ recipe.cookTimeMinutes }} min</span>
          <span class="me-3">🍽️ Serves: {{ recipe.servings }}</span>
          <span>🔥 {{ recipe.caloriesPerServing }} cal</span>
        </div>
        <p class="card-text mb-2">
          <strong>Meal Type:</strong>
          <span class="text-muted ms-1">{{ recipe.mealType.join(', ') }}</span>
        </p>
        <div class="mt-auto">
          <span class="badge bg-secondary me-1 mb-1"
            *ngFor="let tag of recipe.tags">{{ tag }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .recipe-img { height: 200px; object-fit: cover; }
    .recipe-meta { font-size: 0.8rem; color: #555; }
  `]
})
export class RecipeComponent implements OnInit {

  @Input() recipe!: RecipeModel;

  ngOnInit(): void {
    console.log('--- RecipeComponent initialized ---');
    console.log('RecipeComponent: Received recipe via @Input():', this.recipe.name);
    console.log('RecipeComponent: Recipe ID:', this.recipe.id);
    console.log('RecipeComponent: Cuisine:', this.recipe.cuisine);
    console.log('RecipeComponent: Difficulty:', this.recipe.difficulty);
    console.log('RecipeComponent: Rating:', this.recipe.rating);
    console.log('RecipeComponent: Ingredients count:', this.recipe.ingredients.length);
    console.log('RecipeComponent: Rendering card for:', this.recipe.name);
  }

  getDifficultyBadgeClass(): string {
    const difficulty = this.recipe.difficulty.toLowerCase();
    console.log('RecipeComponent: Getting badge class for difficulty:', difficulty);
    switch (difficulty) {
      case 'easy':   return 'bg-success';
      case 'medium': return 'bg-warning text-dark';
      case 'hard':   return 'bg-danger';
      default:       return 'bg-secondary';
    }
  }
}
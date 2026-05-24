// app.component.ts
// Root component of the application.

import { Component, OnInit } from '@angular/core';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RecipeListComponent],
  template: `<app-recipe-list></app-recipe-list>`
})
export class AppComponent implements OnInit {
  title = 'assignment4-recipe-app';

  ngOnInit(): void {
    console.log('=== AppComponent initialized ===');
    console.log('AppComponent: Application started successfully');
    console.log('AppComponent: Loading RecipeListComponent...');
  }
}
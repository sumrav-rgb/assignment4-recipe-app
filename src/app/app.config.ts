// app.config.ts
// I am configuring the application providers here.
// I added provideHttpClient() so that Angular's HttpClient is available
// for injection throughout the entire app — specifically in RecipeService.
// I also added provideRouter() for routing support.

import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),  // registers HttpClient so RecipeService can inject and use it
    provideRouter([])     // sets up the Angular router (ready for future routes)
  ]
};
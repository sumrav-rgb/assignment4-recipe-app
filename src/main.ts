// main.ts
// This is the entry point of the Angular application.
// I am using bootstrapApplication to start the app with AppComponent
// as the root and appConfig which provides HttpClient for the whole app.

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
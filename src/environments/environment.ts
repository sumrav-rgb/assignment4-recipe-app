// environment.ts
// I am storing the Web API base URL here in one central place.

export const environment = {
  production: false,
  apiUrl: 'https://dummyjson.com'
};

// Console log to confirm the environment file is loaded
console.log('=== environment.ts loaded ===');
console.log('Production mode:', false);
console.log('API Base URL:', 'https://dummyjson.com');
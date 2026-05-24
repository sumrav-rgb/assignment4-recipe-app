// Step 1a: RecipeModel
// Here I am creating the RecipeModel interface.
// This model represents a single recipe object returned by the DummyJSON API.
// I looked at the API response from https://dummyjson.com/recipes and mapped
// every field from the JSON into this interface so TypeScript knows exactly
// what shape the data will be in when it comes back from the API.
// Using an interface like this helps catch errors at compile time instead
// of at runtime, which makes the code more reliable and easier to maintain.

export interface RecipeModel {
  id: number;                  // unique identifier for the recipe
  name: string;                // name of the recipe e.g. "Classic Margherita Pizza"
  ingredients: string[];       // array of ingredients needed
  instructions: string[];      // array of step-by-step cooking instructions
  prepTimeMinutes: number;     // how many minutes to prepare
  cookTimeMinutes: number;     // how many minutes to cook
  servings: number;            // how many people it serves
  difficulty: string;          // Easy, Medium, or Hard
  cuisine: string;             // type of cuisine e.g. Italian, Mexican
  caloriesPerServing: number;  // calories in each serving
  tags: string[];              // tags for categorizing the recipe
  userId: number;              // ID of the user who created the recipe
  image: string;               // URL to the recipe image
  rating: number;              // average rating out of 5
  reviewCount: number;         // how many reviews the recipe has received
  mealType: string[];          // e.g. Breakfast, Lunch, Dinner, Snack
}
console.log('=== recipe.model.ts loaded ===');
console.log('RecipeModel interface is ready to use');
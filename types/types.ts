export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

export interface RecipeResponse {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
}
const getImageUrl = (imagePath: string) => {
  // Check if the imagePath is already a full URL
  if (imagePath.startsWith("http")) {
    return imagePath; // Return as is if it's a full URL
  }
  return `https://cdn.dummyjson.com/${imagePath}`; // Otherwise prepend the base URL
};

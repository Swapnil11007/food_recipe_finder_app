const API_KEY = 'd24d3095f4a9ee03e3c802f98544a7b8'; // Replace with your actual API key
const APP_ID = 'fb8e9d39';
const API_URL = 'https://api.edamam.com/search';

const searchRecipes = async (query) => {
  try {
    const response = await fetch(`${API_URL}?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch recipes');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching recipes:', error);
    throw error;
  }
};

const getRecipeDetails = async (recipeId) => {
  try {
    // Construct the API URL with the recipe ID as a query parameter
    const response = await fetch(`${API_URL}?r=${recipeId}&app_id=${APP_ID}&app_key=${API_KEY}`);
   
    // const response = await fetch(`${API_URL}?r=${encodeURIComponent(recipeId)}&app_id=${APP_ID}&app_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch recipe details');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    throw error;
  }
};


const lookupRecipeByURI = async (uri) => {
  try {
    const response = await fetch(`${API_URL}/by-uri?uri=${uri}&app_id=${APP_ID}&app_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to lookup recipe by URI');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error looking up recipe by URI:', error);
    throw error;
  }
};

export { searchRecipes, getRecipeDetails, lookupRecipeByURI };

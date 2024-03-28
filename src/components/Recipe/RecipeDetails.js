import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; // Import navigation hooks
import FavoritesContext from '../../context/favoritesContext';
import Navbar from '../navbar/Navbar';
import { ScrollView } from 'react-native-gesture-handler';

const RecipeDetails = () => {
  const navigation = useNavigation(); // Initialize navigation hook
  const route = useRoute(); // Initialize route hook
  const recipe = route.params && route.params.recipe; // Access recipe from route parameters
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const toggleFavorite = () => {
    if (favorites.some((fav) => fav.uri === recipe.uri)) {
      removeFromFavorites();
    } else {
      addToFavorites();
    }
  };

  const addToFavorites = () => {
    setFavorites([...favorites, recipe]);
  };

  const removeFromFavorites = () => {
    const updatedFavorites = favorites.filter((fav) => fav.uri !== recipe.uri);
    setFavorites(updatedFavorites);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {recipe ?
          <View style={styles.recipeDetailsContainer}>
            <Text style={styles.recipeTitle}>{recipe.label}</Text>
            <View style={styles.image}>
              <Image
                source={{ uri: recipe.image }}
                style={styles.recipeImage}
              />
            </View>
            <View style={styles.recipeMetadata}>
              <Text><Text style={{ fontWeight: 'bold' }}>Calories: </Text>  {recipe.calories}</Text>
              <Text><Text style={{ fontWeight: 'bold' }}>Total Weight: </Text> {recipe.totalWeight}</Text>
            </View>
            <View style={styles.recipeInfo}>

              <View style={styles.ingredientsTable}>
                <Text style={{ fontWeight: 'bold' }}>Ingredients:</Text>
                <View>
                  {recipe.ingredients.map((ingredient, index) => (
                    <Text key={index}> * {ingredient.text}</Text>
                  ))}
                </View>
              </View>
            </View>


          </View>
          :
          <Text>No recipe data available.</Text>
        }
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={toggleFavorite} style={favorites.some((fav) => fav.uri === recipe.uri) ? styles.buttonRemove : styles.buttonAdd}>
          <Text style={styles.buttonText}>
            {favorites.some((fav) => fav.uri === recipe.uri)
              ? 'Remove from Favorites'
              : 'Add to Favorites'}
          </Text>
        </TouchableOpacity>
      </View>
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  recipeDetailsContainer: {
    padding: 20,
  },
  recipeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recipeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%'
  },
  recipeImage: {
    width: '100%',
    height: 200,
    marginRight: 20,
  },
  ingredientsTable: {
    flex: 1,
  },
  recipeMetadata: {
    marginTop: 20,
    marginBottom: 10,
  },
  healthLabels: {
    marginBottom: 20,
  },
  healthLabel: {
    marginRight: 10,
  },
  buttonContainer: {
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAdd: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 5,
    backgroundColor: 'blue'

  },
  buttonRemove: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 5,
    backgroundColor: 'red'

  },
  buttonText: {
    color: '#fff',
  },
});

export default RecipeDetails;

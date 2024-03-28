import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RecipeCard from '../Recipe/RecipeCard';
import FavoritesContext from '../../context/favoritesContext';
import Navbar from '../navbar/Navbar';
import { ScrollView } from 'react-native-gesture-handler';

const FavoriteRecipes = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.recipeCardsContainer}>
          {favorites.length > 0 ? (
            favorites.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))
          ) : (
            <Text>No favorites found.</Text>
          )}
        </View>
      </ScrollView>
      <Navbar />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
  },
  recipeCardsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FavoriteRecipes;

import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import FavoritesContext from '../../context/favoritesContext';

const RecipeCard = ({ recipe }) => {
  const navigation = useNavigation(); // Initialize navigation hook
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
    <View style={styles.recipeCard}>
      <TouchableOpacity
        onPress={() => navigation.navigate('RecipeDetails', { recipe })}
      >
        <Image
          source={{ uri: recipe.image }}
          style={styles.image}
        />
        <Text style={styles.label}>{recipe.label}</Text>
      </TouchableOpacity>

      <View style={styles.favoriteButton}>
        <TouchableOpacity onPress={toggleFavorite}>
          <Text style={favorites.some((fav) => fav.uri === recipe.uri) ? styles.favoriteButtonTextRemove : styles.favoriteButtonTextAdd}>
            {favorites.some((fav) => fav.uri === recipe.uri)
              ? 'Remove from Favorites'
              : 'Add to Favorites'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recipeCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    padding: 10,
    margin: 5,
    width: '92%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 300,
    height: 140,
    borderRadius: 5,
  },
  label: {
    width: 300,
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  favoriteButton: {
    marginTop: 10,
    position: 'absolute',
    bottom: 2,
    right: 5,
  },
  favoriteButtonTextAdd: {
    padding: 5,
    backgroundColor: 'transparent',
    color: '#007bff',
    borderRadius: 5,

  },
  favoriteButtonTextRemove: {
    padding: 5,
    backgroundColor: 'transparent',
    color: 'red',
    borderRadius: 5,
  },
});

export default RecipeCard;

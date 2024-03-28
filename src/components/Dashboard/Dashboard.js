import React, { useState, useEffect, useContext } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import { searchRecipes } from '../../utils/api';
import RecipeCard from '../Recipe/RecipeCard';
import FavoritesContext from '../../context/favoritesContext';
import Navbar from '../navbar/Navbar';
import { ScrollView } from 'react-native-gesture-handler';

const Dashboard = () => {
  const navigation = useNavigation(); // Initialize navigation hook
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const [isLoading, setIsLoading] = useState(true);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // Fetch available recipes
        const searchData = query ? await searchRecipes(query) : await searchRecipes('veg');
        setRecipes(searchData.hits);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setIsLoading(false);
        // Handle error
      }
    };

    fetchRecipes();
  }, [query]);


  return (
    <View style={styles.container}>
      {/* Search bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for recipes..."
          value={query}
          onChangeText={setQuery}
          style={styles.searchBar}
        />
      </View>

      <ScrollView>
        <View style={styles.dashboardContainer}>
          <View style={styles.recipeCardsContainer}>
            {isLoading ? ( // Render shimmer effect if data is loading
              <View style={styles.shimmerEffect}>
                <View style={styles.shimmerLine}></View>
                <View style={styles.shimmerLine}></View>
                <View style={styles.shimmerLine}></View>
              </View>
            ) : (
              recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe.recipe} />
              ))
            )}
          </View>
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
  searchContainer: {
    padding: 10,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
  },
  searchHistory: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 5,
  },
  historyHeader: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dashboardContainer: {
    flex: 1,
    alignItems: 'center'
    // padding: 10,
  },
  recipeCardsContainer: {
    flex: 1,
  },
  shimmerEffect: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shimmerLine: {
    backgroundColor: '#f9f9f9',
    width: '100%',
    height: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default Dashboard;

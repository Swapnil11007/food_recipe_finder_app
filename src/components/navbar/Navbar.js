import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import FavoritesContext from '../../context/favoritesContext';

const Navbar = () => {
  const navigation = useNavigation(); // Initialize navigation hook
  const { favorites, setFavorites } = useContext(FavoritesContext);

  return (
    <View>
      {/* Navigation bar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={styles.navItem}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('FavoriteRecipes')} style={styles.navItem}>
          <Text>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AboutUs')} style={styles.navItem}>
          <Text>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.navItem}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  navItem: {
    padding: 5,
    borderColor: "black",
  },
});

export default Navbar;

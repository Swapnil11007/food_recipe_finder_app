import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecipeHistory = ({ history }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recipe History</Text>
      <View style={styles.historyContainer}>
        {history.map((recipe, index) => (
          <Text key={index} style={styles.item}>{recipe.label}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  item: {
    marginBottom: 5,
  },
});

export default RecipeHistory;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Header, createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/Auth/Login';
import Register from './src/components/Auth/Register';
import Dashboard from './src/components/Dashboard/Dashboard';
import RecipeDetails from './src/components/Recipe/RecipeDetails';
import FavoriteRecipes from './src/components/Dashboard/FavoriteRecipes';
import { FavoritesProvider } from './src/context/favoritesContext';
import AboutUs from './src/components/AboutUs/AboutUs';

const Stack = createStackNavigator();

const App = () => {
    return (
        <FavoritesProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                    <Stack.Screen name="Login" component={Login} options={{
                        headerTitle: "Login",
                        headerLeft: () => null,
                    }} />
                    <Stack.Screen name="Register" component={Register} options={{
                        headerTitle: "Register",
                        headerLeft: () => null,
                    }} />
                    <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
                    <Stack.Screen name="FavoriteRecipes" component={FavoriteRecipes}
                        options={{
                            headerTitle: 'FavoriteRecipes',
                            headerLeft: () => null,
                        }}
                    />
                    <Stack.Screen name="AboutUs" component={AboutUs}
                        options={{
                            headerTitle: "About Us",
                            headerLeft: () => null,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </FavoritesProvider>
    );
};

export default App;

import React from 'react';
import HomeScreen from './HomeScreen';
import CocktailScreen from './CocktailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CocktailScreen"
        component={CocktailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;

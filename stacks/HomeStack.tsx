import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import CocktailScreen from '../screens/CocktailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  HomeScreen: undefined;
  CocktailScreen: { cocktailId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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
};

export default HomeStack;

import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//Components
import HomeStack from './stacks/HomeStack';
import AppDetailsScreen from './screens/AppDetailsScreen';

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else {
              iconName = focused
              ? 'wine'
              : 'wine-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
        })}
        >
          <Tab.Screen 
          name="Home" 
          component={HomeStack} 
          options={{ headerShown: false }}
          />
          <Tab.Screen 
          name="Le Gin'to" 
          component={AppDetailsScreen} 
          options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;

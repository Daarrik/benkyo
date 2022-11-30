import React from 'react';
import type { Node } from 'react';
import { StatusBar } from 'react-native';
import { Home, HowTo } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#001220'} />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HowTo" component={HowTo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

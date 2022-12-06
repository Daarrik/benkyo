import React from 'react';
import { StatusBar } from 'react-native';
import { Home, Game, GameTest, WordList, HowTo } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar backgroundColor={'#001220'} />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Game" component={Game} />
          <Stack.Screen name="Game2" component={GameTest} />
          <Stack.Screen name="List" component={WordList} />
          <Stack.Screen name="HowTo" component={HowTo} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

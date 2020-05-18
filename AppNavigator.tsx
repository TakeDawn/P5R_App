import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackParamList } from './src/global/types/navigation';
import Home from './src/screens/Home';

const MainStack = createStackNavigator<MainStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;

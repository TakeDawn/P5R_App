import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackParamList } from './src/global/types/navigation';
import Home from './src/screens/Home';
import PersonaeList from './src/screens/Compendium/PersonaeList';

const MainStack = createStackNavigator<MainStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen name="Home" component={Home}/>
      <MainStack.Screen name="PersonaeList" component={PersonaeList}/>
    </MainStack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;

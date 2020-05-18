import 'react-native-gesture-handler';
import * as React from 'react';
import { AppRegistry } from 'react-native';
import AppNavigator from './AppNavigator';
import { name as appName } from './app.json';

const app = () => <AppNavigator />;

AppRegistry.registerComponent(appName, () => app);

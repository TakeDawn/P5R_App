import { StackNavigationProp } from '@react-navigation/stack';

type NoParam = undefined;

export type MainStackParamList = {
  Home: NoParam;
  PersonaeList: NoParam;
};

export type HomeScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Home'>;

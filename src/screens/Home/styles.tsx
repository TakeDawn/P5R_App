import {
  StyleSheet,
  ViewStyle,
  ImageStyle,
} from 'react-native';

interface HomeStyle {
  backgroundImage: ImageStyle,
  mainView: ViewStyle,
}

const backgroundImage: ImageStyle = {
  width: '100%',
  height: '100%',
};

const mainView: ViewStyle = {
  flexDirection: 'column',
  flex: 1,
  justifyContent: 'center',
};

export const styles = StyleSheet.create<HomeStyle>({
  backgroundImage,
  mainView,
});

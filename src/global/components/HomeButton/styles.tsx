import {
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface HomeButtonStyle {
  button: ViewStyle,
  textButton: TextStyle,
}

const button: ViewStyle = {
  marginTop: 10,
  marginBottom: 10,
};

const textButton: TextStyle = {
  fontFamily: 'EarwigFactory',
  fontSize: 50,
  textAlign: 'center',
  color: 'white',
};

export const styles = StyleSheet.create<HomeButtonStyle>({
  button,
  textButton,
});

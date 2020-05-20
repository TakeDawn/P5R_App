import {
  StyleSheet,
  ImageStyle,
} from 'react-native';

interface PersonaeListStyle {
  backgroundImage: ImageStyle,
}

const backgroundImage: ImageStyle = {
  width: '100%',
  height: '100%',
};

export const styles = StyleSheet.create<PersonaeListStyle>({
  backgroundImage,
});

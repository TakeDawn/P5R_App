import {
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors } from '../../variables/colors';

interface PersonaCardListStyle {
  cardContainer: ViewStyle,
  levelNameArcanaContainer: ViewStyle,
  levelContainer: ViewStyle,
  nameContainer: ViewStyle,
  arcanaContainer: ViewStyle,
  textInfo: TextStyle,
  textArcana: TextStyle
}

const cardContainer: ViewStyle = {
  marginTop: 10,
  marginBottom: 10,
  paddingLeft: 10,
  paddingRight: 10
};

const levelNameArcanaContainer: ViewStyle = {
  height: 50,
  flexDirection: 'row',
  backgroundColor: colors.personaRed,
  alignItems: 'center',
  paddingLeft: 10
};

const levelContainer: ViewStyle = {
  flex: 0.2,
};

const nameContainer: ViewStyle = {
  flex: 0.8,
};

const arcanaContainer: ViewStyle = {
  height: 35,
  backgroundColor: 'black',
  alignItems: 'center',
};

const textInfo: TextStyle = {
  fontFamily: 'p5hatty',
  fontSize: 28,
  color: 'white',
};

const textArcana: TextStyle = {
  fontFamily: 'EarwigFactory',
  fontSize: 26,
  color: 'white',
};

export const styles = StyleSheet.create<PersonaCardListStyle>({
  cardContainer,
  levelNameArcanaContainer,
  levelContainer,
  nameContainer,
  arcanaContainer,
  textInfo,
  textArcana,
});

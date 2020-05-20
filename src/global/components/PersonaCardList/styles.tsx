import {
  StyleSheet,
  ViewStyle,
  TextStyle, ImageStyle,
} from 'react-native';
import { colors } from '../../variables/colors';

interface PersonaCardListStyle {
  cardContainer: ViewStyle,
  levelNameArcanaContainer: ViewStyle,
  levelContainer: ViewStyle,
  nameContainer: ViewStyle,
  arcanaContainer: ViewStyle,
  statsContainer: ViewStyle,
  statContainer: ViewStyle,
  elementalsContainer: ViewStyle,
  elementalContainer: ViewStyle,
  textInfo: TextStyle,
  textArcana: TextStyle,
  textStatType: TextStyle,
  textStatValue: TextStyle,
  elementalIcon: ImageStyle,
}

const cardContainer: ViewStyle = {
  marginTop: 10,
  marginBottom: 10,
  paddingLeft: 10,
  paddingRight: 10,
};

const levelNameArcanaContainer: ViewStyle = {
  height: 35,
  flexDirection: 'row',
  backgroundColor: 'white',
};

const levelContainer: ViewStyle = {
  marginRight: 10,
  backgroundColor: 'black',
  justifyContent: 'center',
  paddingLeft: 5,
  paddingRight: 5,
};

const nameContainer: ViewStyle = {
  justifyContent: 'center',
};

const arcanaContainer: ViewStyle = {
  height: 35,
  backgroundColor: 'black',
  alignItems: 'center',
};

const statsContainer: ViewStyle = {
  flexDirection: 'row',
  backgroundColor: 'white',
  justifyContent: 'space-around',
  paddingTop: 5,
  paddingBottom: 5,
};

const statContainer: ViewStyle = {
  flexDirection: 'column',
};

const elementalsContainer: ViewStyle = StyleSheet.flatten([statsContainer, {
  backgroundColor: 'black',
}]);

const elementalContainer: ViewStyle = StyleSheet.flatten([statContainer, {
  alignItems: 'center'
}]);

const textInfo: TextStyle = {
  fontFamily: 'p5hatty',
  fontSize: 25,
  color: colors.personaRed,
};

const textArcana: TextStyle = {
  fontFamily: 'EarwigFactory',
  fontSize: 26,
  color: 'white',
};

const textStatType: TextStyle = StyleSheet.flatten([textInfo, {
  fontSize: 20,
  color: 'black',
}]);

const textStatValue: TextStyle = StyleSheet.flatten([textArcana, {
  fontSize: 25,
  color: colors.personaRed,
}]);

const elementalIcon: ImageStyle = {
  width: 25,
  height: 25,
};

export const styles = StyleSheet.create<PersonaCardListStyle>({
  cardContainer,
  levelNameArcanaContainer,
  levelContainer,
  nameContainer,
  arcanaContainer,
  statsContainer,
  statContainer,
  elementalsContainer,
  elementalContainer,
  textInfo,
  textArcana,
  textStatType,
  textStatValue,
  elementalIcon,
});

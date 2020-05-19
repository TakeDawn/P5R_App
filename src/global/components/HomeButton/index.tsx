import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';

interface Props {
  textButton: string,
  onPress: () => void,
}

const HomeButton: React.FC<Props> = (props: Props) =>
  <View>
    <TouchableOpacity
      style={styles.button}
      onPress={props.onPress}
    >
      <Text style={styles.textButton}>
        {props.textButton}
      </Text>
    </TouchableOpacity>
  </View>;

export default HomeButton;


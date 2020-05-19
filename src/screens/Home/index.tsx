import * as React from 'react';
import { HomeScreenNavigationProp } from '../../global/types/navigation';
import { View, ImageBackground } from 'react-native';
import HomeButton from '../../global/components/HomeButton';
import HomeBackground from '../../global/assets/images/main_background.jpg';
import { styles } from './styles';

interface Props {
  navigation: HomeScreenNavigationProp,
}

class Home extends React.Component<Props, {}> {
  render() {
    return (
      <ImageBackground
        source={HomeBackground}
        style={styles.backgroundImage}
      >
        <View style={styles.mainView}>
          <HomeButton
            textButton="Compendium"
            onPress={() => this.props.navigation.navigate('PersonaeList')}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default Home;

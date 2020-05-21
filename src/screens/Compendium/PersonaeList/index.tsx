import * as React from 'react';
import { ImageBackground, FlatList } from 'react-native';
import PersonaCardList from '../../../global/components/PersonaCardList';
import { Persona, FlatListPersona } from '../../../global/types/persona';
import { personaeRoyal } from '../../../global/data/personae/personaeRoyal';
import CompendiumBackground from '../../../global/assets/images/compendium_background.jpg';
import { styles } from './styles';

class PersonaeList extends React.Component<{}, {}> {
  render() {
    return (
      <ImageBackground
        source={CompendiumBackground}
        style={styles.backgroundImage}
      >
        <FlatList
          data={personaeRoyal}
          renderItem={({ item }: FlatListPersona) => <PersonaCardList persona={item} />}
          keyExtractor={(persona: Persona) => persona.id + '-' + persona.name}
        />
      </ImageBackground>
    );
  }
}

export default PersonaeList;

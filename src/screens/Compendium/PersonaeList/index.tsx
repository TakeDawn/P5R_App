import * as React from 'react';
import { ImageBackground, ScrollView } from 'react-native';
import PersonaCardList from '../../../global/components/PersonaCardList';
import { Persona } from '../../../global/types/persona';
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
        <ScrollView>
          {
            personaeRoyal.map<React.ReactNode>((persona: Persona) =>
              <PersonaCardList
                key={persona.id + '-' + persona.name}
                persona={persona}
              />
            )
          }
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default PersonaeList;

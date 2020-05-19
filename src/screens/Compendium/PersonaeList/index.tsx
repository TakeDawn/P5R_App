import * as React from 'react';
import { View } from 'react-native';
import PersonaCardList from '../../../global/components/PersonaCardList';
import { Persona } from '../../../global/types/persona';
import { personaeRoyal } from '../../../global/data/personae/personaeRoyal';

class PersonaeList extends React.Component<{}, {}> {
  render() {
    return (
      <View>
        {
          personaeRoyal.map<React.ReactNode>((persona: Persona) =>
            <PersonaCardList persona={persona} />
          )
        }
      </View>
    );
  }
}

export default PersonaeList;

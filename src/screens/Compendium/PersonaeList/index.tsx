import * as React from 'react';
import { Text, View } from 'react-native';
import { Persona } from '../../../global/types/persona';
import { Arcana } from '../../../global/types/arcana';
import { personaeRoyal } from '../../../global/data/personae/personaeRoyal';
import { arcanas } from '../../../global/data/arcanas/arcanas';
import { Maybe } from 'monet';
import _ from 'lodash/fp';

class PersonaeList extends React.Component<{}, {}> {
  render() {
    return (
      <View>
        {
          personaeRoyal.map<React.ReactNode>((persona: Persona) =>
            <View
              key={persona.id + '-' + persona.name}
            >
              <Text>
                Name: {persona.name}
              </Text>

              <Text>
                Level: {persona.level}
              </Text>

              <Text>
                Arcana: {this.getArcanaName(persona.arcanaId)}
              </Text>
            </View>
          )
        }
      </View>
    );
  }

  getArcanaName = (arcanaId: number): string =>
    this.getMaybeArcana(arcanaId).cata(
      () => 'Arcana not found.',
      (arcana: Arcana) => arcana.name
    );

    getMaybeArcana = (arcanaId: number): Maybe<Arcana> =>
      Maybe.fromFalsy(_.find<Arcana>({id: arcanaId})(arcanas));
}

export default PersonaeList;

import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Persona } from '../../types/persona';
import { Arcana } from '../../types/arcana';
import { arcanas } from '../../../global/data/arcanas/arcanas';
import { Maybe } from 'monet';
import _ from 'lodash/fp';
import { styles } from './styles';

interface Props {
  persona: Persona,
}

const PersonaCardList: React.FC<Props> = (props: Props) =>
  <View key={props.persona.id + '-' + props.persona.name}>
    <TouchableOpacity
      style={styles.cardContainer}
    >
      <View style={styles.levelNameArcanaContainer}>
        <View style={styles.levelContainer}>
          <Text style={styles.textInfo}>
            Lv.{props.persona.level}
          </Text>
        </View>

          <View style={styles.nameContainer}>
            <Text style={styles.textInfo}>
              {props.persona.name}
            </Text>
          </View>
      </View>

      <View style={styles.arcanaContainer}>
        <Text style={styles.textArcana}>
          {getArcanaName(props.persona.arcanaId)}
        </Text>
      </View>
    </TouchableOpacity>
  </View>;

  const getArcanaName = (arcanaId: number): string =>
    getMaybeArcana(arcanaId).cata(
      () => 'Arcana not found.',
      (arcana: Arcana) => arcana.name
    );

    const getMaybeArcana = (arcanaId: number): Maybe<Arcana> =>
      Maybe.fromFalsy(_.find<Arcana>({id: arcanaId})(arcanas));

export default PersonaCardList;


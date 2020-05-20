import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity, Image,
} from 'react-native';
import { Elemental, Persona } from '../../types/persona';
import { Arcana } from '../../types/arcana';
import { Stat } from '../../types/persona';
import { arcanas } from '../../data/arcanas/arcanas';
import { Maybe } from 'monet';
import _ from 'lodash/fp';
import { styles } from './styles';

interface Props {
  persona: Persona,
}

const PersonaCardList: React.FC<Props> = (props: Props) =>
  <View>
    <TouchableOpacity style={styles.cardContainer}>
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

      <View style={styles.statsContainer}>
        {
          props.persona.baseStats.map<React.ReactNode>((stat: Stat) =>
            <View
              key={props.persona.id + '-' + stat.type}
              style={styles.statContainer}
            >
              <Text style={styles.textStatType}>
                {stat.type}
              </Text>

              <Text style={styles.textStatValue}>
                {stat.value}
              </Text>
            </View>
          )
        }
      </View>

      <View style={styles.elementalsContainer}>
        {
          props.persona.elementals.map<React.ReactNode>((elemental: Elemental) =>
            <View
              key={props.persona.id + '-' + elemental.type}
              style={styles.elementalContainer}
            >
              { chooseElementalIcon(elemental.type) }

              <Text style={styles.textStatValue}>
                {
                  elemental.resistance === 'neutral' ? '-' : elemental.resistance
                }
              </Text>
            </View>
          )
        }
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

  const chooseElementalIcon = (elementalType: string): React.ReactNode => {
    switch(elementalType) {
      case 'Physical':
        return <Image source={require('../../assets/icons/phys.png')} style={styles.elementalIcon} />;

      case 'Gun':
        return <Image source={require('../../assets/icons/gun.png')} style={styles.elementalIcon} />;

      case 'Fire':
        return <Image source={require('../../assets/icons/fire.png')} style={styles.elementalIcon} />;

      case 'Ice':
        return <Image source={require('../../assets/icons/ice.png')} style={styles.elementalIcon} />;

      case 'Electric':
        return <Image source={require('../../assets/icons/electric.png')} style={styles.elementalIcon} />;

      case 'Wind':
        return <Image source={require('../../assets/icons/wind.png')} style={styles.elementalIcon} />;

      case 'Psychic':
        return <Image source={require('../../assets/icons/psy.png')} style={styles.elementalIcon} />;

      case 'Nuclear':
        return <Image source={require('../../assets/icons/nuclear.png')} style={styles.elementalIcon} />;

      case 'Bless':
        return <Image source={require('../../assets/icons/bless.png')} style={styles.elementalIcon} />;

      case 'Curse':
        return <Image source={require('../../assets/icons/curse.png')} style={styles.elementalIcon} />;
    }
  };

export default PersonaCardList;


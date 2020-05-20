import { Persona } from '../../types/persona';

export const personaeRoyal: Array<Persona> = [
  {
    id: 1,
    name: 'Arsene',
    level: 1,
    arcanaId: 6,
    baseStats: [
      {
        type: 'St',
        value: 2
      },
      {
        type: 'Ma',
        value: 2
      },
      {
        type: 'En',
        value: 2
      },
      {
        type: 'Ag',
        value: 3
      },
      {
        type: 'Lu',
        value: 1
      },
    ],
    elementals: [
      {
        type: 'Physical',
        resistance: 'neutral',
      },
      {
        type: 'Gun',
        resistance: 'neutral',
      },
      {
        type: 'Fire',
        resistance: 'neutral',
      },
      {
        type: 'Ice',
        resistance: 'Wk',
      },
      {
        type: 'Electric',
        resistance: 'neutral',
      },
      {
        type: 'Wind',
        resistance: 'neutral',
      },
      {
        type: 'Psychic',
        resistance: 'neutral',
      },
      {
        type: 'Nuclear',
        resistance: 'neutral',
      },
      {
        type: 'Bless',
        resistance: 'Wk',
      },
      {
        type: 'Curse',
        resistance: 'Str',
      },
    ],
    skills: [
      {
        level: 0,
        skillId: 45
      },
      {
        level: 2,
        skillId: 270
      },
      {
        level: 4,
        skillId: 345
      },
      {
        level: 5,
        skillId: 277
      },
      {
        level: 7,
        skillId: 121
      },
    ],
  },
];

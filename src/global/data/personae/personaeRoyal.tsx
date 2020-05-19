import { Persona } from '../../types/persona';

export const personaeRoyal: Array<Persona> = [
  {
    id: 1,
    name: 'Arsene',
    level: 1,
    arcanaId: 6,
    baseStats: {
      strength: 2,
      magic: 2,
      endurance: 2,
      agility: 3,
      luck: 1,
    },
    elementals: {
      physical: 'neutral',
      gun: 'neutral',
      Fire: 'neutral',
      ice: 'weak',
      electric: 'neutral',
      wind: 'neutral',
      psychic: 'neutral',
      nuclear: 'neutral',
      bless: 'weak',
      curse: 'resist',
    },
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

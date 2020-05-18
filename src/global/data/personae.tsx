import { Persona } from '../types/persona';

export const personae: Array<Persona> = [
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
      luck: 1
    },
    elementals: {
      physical: 'neutral',
      gun: 'neutral',
      Fire: 'neutral',
      ice: 'weak',
      electric: 'neutral',
      wind: 'neutral',
      psychic: 'neutral',
      nuclear: 'neutral'  ,
      bless: 'weak',
      curse: 'resist'
    },
    skills: [
      {
        level: 1,
        type: 'curse',
        name: 'Eiha',
        effect: 'Deal weak Cursedamage to 1 foe.',
        cost: '4 SP'
      }
    ]
  },
];

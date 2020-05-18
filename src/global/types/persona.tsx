export type Persona = {
  id: number,
  name: string,
  level: number,
  arcanaId: number,
  baseStats: Stats,
  elementals: Elementals,
  skills: Array<PersonaSkill>,
}

type Stats = {
  strength: number,
  magic: number,
  endurance: number,
  agility: number,
  luck: number,
};

type Elementals = {
  physical: Resistance,
  gun: Resistance,
  Fire: Resistance,
  ice: Resistance,
  electric: Resistance,
  wind: Resistance,
  psychic: Resistance,
  nuclear: Resistance,
  bless: Resistance,
  curse: Resistance,
};

type Resistance = 'drain' | 'resist' |'neutral' | 'weak';

type PersonaSkill = {
  level: number,
  skillsId: number,
};

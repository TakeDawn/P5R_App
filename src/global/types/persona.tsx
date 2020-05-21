export type FlatListPersona = {
  item: Persona
};

export type Persona = {
  id: number,
  name: string,
  level: number,
  arcanaId: number,
  baseStats: Array<Stat>,
  elementals: Array<Elemental>,
  skills: Array<PersonaSkill>,
  isDLC?: boolean,
}

export type Stat = {
  type: string,
  value: number,
};

export type Elemental = {
  type: string,
  resistance: Resistance,
};

type Resistance = 'Dr' | 'Str' | 'neutral' | 'Wk' | 'Null' | 'Rpl';

type PersonaSkill = {
  level: number,
  skillId: number,
};

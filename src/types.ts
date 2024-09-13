export type CharacterSystemData = {
  title: string;
  titleDie: string;
  notes: string;
  order: string;
  tenet: string;

  personalQuest: {
    name: string;
    completed: boolean;
  };
  orderQuest: {
    name: string;
    completed: boolean;
  };
  conditions: Array<{
    id: string;
    name: string;
  }>;
  drinks: Array<{
    id: string;
    what: string;
    where: string;
  }>;
};

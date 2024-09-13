// enabling this rule because ts 5.5.x is having some issues with deep types
// that seem to come out here
/* eslint "@typescript-eslint/explicit-function-return-type": "error" */

import { nanoid } from "nanoid";

import { assertCharacterActor } from "../v10Types";

export class PubCrusadeActor extends Actor {
  setName = (name: string): Promise<this | undefined> => {
    return this.update({ name });
  };

  setTitle = async (title: string): Promise<void> => {
    assertCharacterActor(this);
    await this.update({ system: { title } });
  };

  setTitleDie = async (titleDie: string): Promise<void> => {
    assertCharacterActor(this);
    await this.update({ system: { titleDie } });
  };

  setOrder = async (order: string): Promise<void> => {
    assertCharacterActor(this);
    await this.update({ system: { order } });
  };

  setTenet = async (tenet: string): Promise<void> => {
    assertCharacterActor(this);
    await this.update({ system: { tenet } });
  };

  setOrderQuestName = async (orderQuestName: string): Promise<void> => {
    assertCharacterActor(this);
    await this.update({
      system: {
        orderQuest: { ...this.system.orderQuest, name: orderQuestName },
      },
    });
  };

  addDrink = async (): Promise<void> => {
    assertCharacterActor(this);
    await this.update({
      system: {
        drinks: [...this.system.drinks, { id: nanoid(), what: "", where: "" }],
      },
    });
  };

  setDrinkWhat = async (id: string, what: string): Promise<void> => {
    assertCharacterActor(this);
    const index = this.system.drinks.findIndex(({ id: i }) => i === id);
    if (index === -1) {
      throw new Error("invalid drink id");
    }
    await this.update({
      system: {
        drinks: [
          ...this.system.drinks.slice(0, index),
          { ...this.system.drinks[index], what },
          ...this.system.drinks.slice(index + 1),
        ],
      },
    });
  };

  setDrinkWhere = async (id: string, where: string): Promise<void> => {
    assertCharacterActor(this);
    const index = this.system.drinks.findIndex(({ id: i }) => i === id);
    if (index === -1) {
      throw new Error("invalid drink id");
    }
    await this.update({
      system: {
        drinks: [
          ...this.system.drinks.slice(0, index),
          { ...this.system.drinks[index], where },
          ...this.system.drinks.slice(index + 1),
        ],
      },
    });
  };

  deleteDrink = async (id: string): Promise<void> => {
    assertCharacterActor(this);
    const index = this.system.drinks.findIndex(({ id: i }) => i === id);
    if (index === -1) {
      throw new Error("invalid drink id");
    }
    await this.update({
      system: {
        drinks: [
          ...this.system.drinks.slice(0, index),
          ...this.system.drinks.slice(index + 1),
        ],
      },
    });
  };

  setOrderQuestCompleted = async (
    orderQuestCompleted: boolean,
  ): Promise<void> => {
    assertCharacterActor(this);
    await this.update({
      system: {
        orderQuest: {
          ...this.system.orderQuest,
          completed: orderQuestCompleted,
        },
      },
    });
  };

  setPersonalQuestName = async (personalQuestName: string): Promise<void> => {
    assertCharacterActor(this);
    await this.update({
      system: {
        personalQuest: {
          ...this.system.personalQuest,
          name: personalQuestName,
        },
      },
    });
  };

  setPersonalQuestCompleted = async (
    personalQuestCompleted: boolean,
  ): Promise<void> => {
    assertCharacterActor(this);
    await this.update({
      system: {
        personalQuest: {
          ...this.system.personalQuest,
          completed: personalQuestCompleted,
        },
      },
    });
  };
}

declare global {
  interface DocumentClassConfig {
    Actor: typeof PubCrusadeActor;
  }
}

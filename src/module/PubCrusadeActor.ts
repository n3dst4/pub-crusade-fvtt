// enabling this rule because ts 5.5.x is having some issues with deep types
// that seem to come out here
/* eslint "@typescript-eslint/explicit-function-return-type": "error" */

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

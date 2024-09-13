// enabling this rule because ts 5.5.x is having some issues with deep types
// that seem to come out here
/* eslint "@typescript-eslint/explicit-function-return-type": "error" */

import { nanoid } from "nanoid";

import { systemLogger } from "../copiedFromInvestigator/functions/utilities";
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

  roll = async (
    modifier: number,
    useTitleDie: boolean,
    lowOrHigh: "high" | "low",
  ): Promise<void> => {
    assertCharacterActor(this);
    const die = useTitleDie ? this.system.titleDie : "d8";
    const rollExpression = `${die} + @modifier`;

    const roll = new Roll(rollExpression, { modifier });
    await roll.evaluate({ async: true });
    systemLogger.log(roll);
    const total = roll.total;
    if (total === undefined) {
      throw new Error("total is undefined");
    }
    const isSuccess =
      lowOrHigh === "low"
        ? total < this.system.drinks.length ||
          roll.dice[0].results[0].result === 1
        : total > this.system.drinks.length ||
          roll.dice[0].results[0].result === 8;
    const isComplicated = total === this.system.drinks.length;

    const message = isComplicated
      ? "<div class='brilliant-catastrophe'>Brilliant Catastrophe!</div>"
      : isSuccess
        ? "<div class='success'>Success!</div>"
        : "<div class='failure'>Failure!</div>";

    await roll.toMessage({
      speaker: ChatMessage.getSpeaker({
        actor: this,
      }),
      content: `
        <div
        >
          Tries to roll ${lowOrHigh} after ${this.system.drinks.length} drinks.
          </div>
          <div>
          ${roll.formula} = ${roll.total}
        </div>
        ${message}
      `,
    });
  };

  // async testAbility(spend: number): Promise<void> {
  //   assertGame(game);
  //   assertAbilityItem(this);
  //   if (this.actor === null) {
  //     return;
  //   }
  //   const isBoosted = settings.useBoost.get() && this.system.boost;
  //   const boost = isBoosted ? 1 : 0;
  //   const situationalModifiers = this.activeSituationalModifiers.map((id) => {
  //     assertAbilityItem(this);
  //     const situationalModifier = this.system.situationalModifiers.find(
  //       (situationalModifier) => situationalModifier?.id === id,
  //     );
  //     return situationalModifier;
  //   });

  //   let rollExpression = "1d6 + @spend";
  //   const rollValues: Record<string, number> = { spend };
  //   if (isBoosted) {
  //     rollExpression += " + @boost";
  //     rollValues["boost"] = boost;
  //   }
  //   for (const situationalModifier of situationalModifiers) {
  //     if (situationalModifier === undefined) {
  //       continue;
  //     }
  //     rollExpression += ` + @${situationalModifier.id}`;
  //     rollValues[situationalModifier.id] = situationalModifier.modifier;
  //   }

  //   const roll = new Roll(rollExpression, rollValues);
  //   await roll.evaluate({ async: true });
  //   await roll.toMessage({
  //     speaker: ChatMessage.getSpeaker({
  //       actor: this.actor,
  //     }),
  //     content: `
  //       <div
  //         class="${constants.abilityChatMessageClassName}"
  //         ${constants.htmlDataItemId}="${this.id}"
  //         ${constants.htmlDataActorId}="${this.parent?.id ?? ""}"
  //         ${constants.htmlDataMode}="${constants.htmlDataModeTest}"
  //         ${constants.htmlDataName}="${this.name}"
  //         ${constants.htmlDataImageUrl}="${this.img}"
  //         ${constants.htmlDataTokenId}="${this.parent?.token?.id ?? ""}"
  //       />
  //     `,
  //   });
  //   const pool = this.system.pool - (Number(spend) || 0);
  //   await this.update({ system: { pool } });
  // }
}

declare global {
  interface DocumentClassConfig {
    Actor: typeof PubCrusadeActor;
  }
}

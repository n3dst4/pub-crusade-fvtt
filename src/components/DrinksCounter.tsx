import React from "react";

import { loveYaLikeASister } from "../copiedFromInvestigator/themes/constants";
import { CharacterActor } from "../v10Types";
import { Panel } from "./Panel";

interface DrinksCounterProps {
  actor: CharacterActor;
  className?: string;
}

export const DrinksCounter: React.FC<DrinksCounterProps> = ({
  actor,
  className,
}) => {
  return (
    <Panel
      className={className}
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0",
        font: loveYaLikeASister.fontFamily,
      }}
    >
      <div
        css={{
          fontSize: "7em",
          lineHeight: "1",
        }}
      >
        {actor.system.drinks.length}
      </div>
      <div
        css={{
          transform: "translateY(-0.5em)",
          fontSize: "2em",
        }}
      >
        {actor.system.drinks.length === 1 ? "Drink" : "Drinks"}
      </div>
    </Panel>
  );
};

DrinksCounter.displayName = "DrinksCounter";

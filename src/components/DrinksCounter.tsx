import React from "react";

import { CharacterActor } from "../v10Types";

interface DrinksCounterProps {
  actor: CharacterActor;
  className?: string;
}

export const DrinksCounter: React.FC<DrinksCounterProps> = ({
  actor,
  className,
}) => {
  return (
    <div
      className={className}
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div css={{ fontSize: "3em" }}>{actor.system.drinks.length}</div>
      <div>drinks</div>
    </div>
  );
};

DrinksCounter.displayName = "DrinksCounter";

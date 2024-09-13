import React from "react";

import { Button } from "../copiedFromInvestigator/components/inputs/Button";
import { CharacterActor } from "../v10Types";
import { DrinksRow } from "./DrinksRow";
import { Panel } from "./Panel";

interface DrinksListProps {
  actor: CharacterActor;
  className?: string;
}

export const DrinksList: React.FC<DrinksListProps> = ({ actor, className }) => {
  return (
    <Panel
      className={className}
      css={{
        display: "grid",
        gridTemplateColumns: "subgrid",
        alignContent: "start",
        rowGap: "0.5em",
        columnGap: "0.2em",
      }}
    >
      <h2 css={{ gridColumn: "span 3" }}>What</h2>
      <h2 css={{ gridColumn: "span 3" }}>Where</h2>
      {actor.system.drinks.length === 0 && (
        <div css={{ gridColumn: "1 / -1", justifySelf: "center" }}>
          {"No drinks yet... you're alarmingly sober."}
        </div>
      )}
      {actor.system.drinks.map(({ id }) => {
        return <DrinksRow key={id} actor={actor} id={id} />;
      })}
      <div css={{ gridColumn: "3 / 5", justifySelf: "center" }}>
        <Button
          disabled={actor.system.drinks.length >= 9}
          onClick={actor.addDrink}
        >
          Drink a drink
        </Button>
      </div>
    </Panel>
  );
};

DrinksList.displayName = "DrinksList";

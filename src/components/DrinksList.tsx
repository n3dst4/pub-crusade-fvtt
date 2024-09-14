import React from "react";

import { absoluteCover } from "../copiedFromInvestigator/components/absoluteCover";
import { Button } from "../copiedFromInvestigator/components/inputs/Button";
import { CharacterActor } from "../v10Types";
import { DrinksRow } from "./DrinksRow";

interface DrinksListProps {
  actor: CharacterActor;
  className?: string;
}

export const DrinksList: React.FC<DrinksListProps> = ({ actor, className }) => {
  return (
    <div
      className={className}
      css={{
        ...absoluteCover,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows:
          "[headers] min-content [rows] minmax(0, 1fr) [button] min-content",
        alignContent: "start",
        rowGap: "0.5em",
        columnGap: "0.2em",
        overflow: "hidden",
        padding: "0.5em",
      }}
    >
      <h2 css={{ gridColumn: "1", gridRow: "headers", "&&": { margin: 0 } }}>
        What
      </h2>
      <h2 css={{ gridColumn: "2", gridRow: "headers", "&&": { margin: 0 } }}>
        Where
      </h2>
      {actor.system.drinks.length === 0 && (
        <div
          css={{
            gridColumn: "1 / -1",
            gridRow: "rows",
            justifySelf: "center",
          }}
        >
          {"No drinks yet... you're alarmingly sober."}
        </div>
      )}
      {actor.system.drinks.length > 0 && (
        <div
          css={{
            gridColumn: "1 / -1",
            gridRow: "rows",
            display: "grid",
            gridTemplateColumns: "subgrid",
            overflowY: "scroll",
            alignContent: "start",
          }}
        >
          {actor.system.drinks.map(({ id }) => {
            return <DrinksRow key={id} actor={actor} id={id} />;
          })}
        </div>
      )}
      <div
        css={{ gridColumn: "1 / -1", gridRow: "button", justifySelf: "center" }}
      >
        <Button
          disabled={actor.system.drinks.length >= 900}
          onClick={actor.addDrink}
        >
          Drink a drink
        </Button>
      </div>
    </div>
  );
};

DrinksList.displayName = "DrinksList";

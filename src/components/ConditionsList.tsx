import React from "react";

import { absoluteCover } from "../copiedFromInvestigator/components/absoluteCover";
import { Button } from "../copiedFromInvestigator/components/inputs/Button";
import { CharacterActor } from "../v10Types";
import { ConditionsRow } from "./ConditionsRow";

interface ConditionsListProps {
  actor: CharacterActor;
  className?: string;
}

export const ConditionsList: React.FC<ConditionsListProps> = ({
  actor,
  className,
}) => {
  return (
    <div
      className={className}
      css={{
        ...absoluteCover,
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "[rows] minmax(0, 1fr) [button] min-content",
        alignContent: "start",
        rowGap: "0.5em",
        columnGap: "0.2em",
        padding: "0.5em",
      }}
    >
      {actor.system.conditions.length === 0 && (
        <div
          css={{ gridColumn: "1 / -1", gridRow: "rows", justifySelf: "center" }}
        >
          {"No conditions yet. Give it some time."}
        </div>
      )}
      {actor.system.conditions.length > 0 && (
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
          {actor.system.conditions.map(({ id }) => {
            return <ConditionsRow key={id} actor={actor} id={id} />;
          })}
        </div>
      )}
      <div
        css={{ gridColumn: "1 / -1", gridRow: "button", justifySelf: "center" }}
      >
        <Button onClick={actor.addCondition}>Add condition</Button>
      </div>
    </div>
  );
};

ConditionsList.displayName = "ConditionsList";

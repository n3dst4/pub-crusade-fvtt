import React from "react";

import { Button } from "../copiedFromInvestigator/components/inputs/Button";
import { CharacterActor } from "../v10Types";
import { ConditionsRow } from "./ConditionsRow";
import { Panel } from "./Panel";

interface ConditionsListProps {
  actor: CharacterActor;
  className?: string;
}

export const ConditionsList: React.FC<ConditionsListProps> = ({
  actor,
  className,
}) => {
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
      <h2 css={{ gridColumn: "span 2" }}>Conditions</h2>
      {actor.system.conditions.length === 0 && (
        <div css={{ gridColumn: "1 / -1", justifySelf: "center" }}>
          {"No conditions yet. Give it some time."}
        </div>
      )}
      {actor.system.conditions.map(({ id }) => {
        return <ConditionsRow key={id} actor={actor} id={id} />;
      })}
      <div css={{ gridColumn: "1 / -1", justifySelf: "center" }}>
        <Button onClick={actor.addCondition}>Add condition</Button>
      </div>
    </Panel>
  );
};

ConditionsList.displayName = "ConditionsList";

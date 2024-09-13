import React from "react";

import { AsyncNumberInput } from "../copiedFromInvestigator/components/inputs/AsyncNumberInput";
import { Button } from "../copiedFromInvestigator/components/inputs/Button";
import { CharacterActor } from "../v10Types";

interface RollProps {
  title: string;
  description: string;
  actor: CharacterActor;
  lowOrHigh: "low" | "high";
}

export const Roll: React.FC<RollProps> = ({
  title,
  description,
  actor,
  lowOrHigh,
}) => {
  const [modifier, setModifier] = React.useState(0);
  const [useTitleDie, setUseTitleDie] = React.useState(false);

  const handleChangeUseTitleDie = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setUseTitleDie(e.target.value === "true");
    },
    [setUseTitleDie],
  );

  const handleClickRoll = React.useCallback(() => {
    console.log("roll");
    void actor.roll(modifier, useTitleDie, lowOrHigh);
  }, [actor, lowOrHigh, modifier, useTitleDie]);

  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <div>
        modifier: <AsyncNumberInput value={modifier} onChange={setModifier} />
      </div>
      <div>
        <select
          value={useTitleDie ? "true" : "false"}
          onChange={handleChangeUseTitleDie}
        >
          <option value="false">Standard: d8</option>
          <option value="true">Title die: {actor.system.titleDie}</option>
        </select>{" "}
      </div>
      <div>
        <Button onClick={handleClickRoll}>Roll</Button>
      </div>
    </div>
  );
};

Roll.displayName = "Roll";

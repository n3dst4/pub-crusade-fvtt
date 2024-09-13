import React, { Fragment, useCallback } from "react";

import { AsyncTextInput } from "../copiedFromInvestigator/components/inputs/AsyncTextInput";
import { Button } from "../copiedFromInvestigator/components/inputs/Button";
import { confirmADoodleDo } from "../copiedFromInvestigator/functions/confirmADoodleDo";
import { CharacterActor } from "../v10Types";

interface DrinksRowProps {
  actor: CharacterActor;
  id: string;
}

export const DrinksRow: React.FC<DrinksRowProps> = ({ actor, id }) => {
  const drink = actor.system.drinks.find(({ id: i }) => i === id);
  if (drink === undefined) {
    throw new Error("invalid drink id");
  }

  const handleChangeWhat = useCallback(
    (what: string) => {
      void actor.setDrinkWhat(id, what);
    },
    [actor, id],
  );

  const handleChangeWhere = useCallback(
    (where: string) => {
      void actor.setDrinkWhere(id, where);
    },
    [actor, id],
  );

  const handleDelete = useCallback(async () => {
    const yes = await confirmADoodleDo({
      message: `Are you sure you want to delete the ${drink.what} that you drank at ${drink.where}?`,
      confirmText: "Yes",
      cancelText: "No",
      confirmIconClass: "fa-trash",
    });
    if (yes) {
      void actor.deleteDrink(id);
    }
  }, [actor, drink.what, drink.where, id]);

  return (
    <Fragment>
      <div css={{ gridColumn: "span 3" }}>
        <AsyncTextInput value={drink.what} onChange={handleChangeWhat} />
      </div>
      <div
        css={{ gridColumn: "span 3", display: "flex", flexDirection: "row" }}
      >
        <AsyncTextInput value={drink.where} onChange={handleChangeWhere} />
        <Button onClick={handleDelete}>Delete</Button>
      </div>
    </Fragment>
  );
};

DrinksRow.displayName = "DrinksRow";

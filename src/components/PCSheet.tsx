import React from "react";

import { CSSReset } from "../copiedFromInvestigator/components/CSSReset";
import { AsyncTextInput } from "../copiedFromInvestigator/components/inputs/AsyncTextInput";
import { Toggle } from "../copiedFromInvestigator/components/inputs/Toggle";
import { tealTheme } from "../copiedFromInvestigator/themes/tealTheme";
import { CharacterActor } from "../v10Types";

interface PCSheetProps {
  actor: CharacterActor;
  foundryApplication: Application;
}

export const PCSheet: React.FC<PCSheetProps> = ({
  actor,
  foundryApplication,
}) => {
  return (
    <CSSReset theme={tealTheme} mode="large">
      <div
        css={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#ecb692",
          padding: "1em",
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows: "repeat(4, min-content) 1fr 1fr",
          gap: "1em",
        }}
      >
        <div css={{ gridColumn: "1/2", display: "flex", flexDirection: "row" }}>
          <div>image</div>
        </div>
        <div
          css={{ gridColumn: "2/-1", display: "flex", flexDirection: "row" }}
        >
          <div>PUB CRUSADE</div>
        </div>
        <div css={{ gridColumn: "1/3" }}>
          <label>
            Title
            <AsyncTextInput
              value={actor.system.title}
              onChange={actor.setTitle}
              index={0}
            />
          </label>
        </div>
        <div css={{ gridColumn: "3/4" }}>
          <label>
            Die
            <select
              css={{ display: "block" }}
              value={actor.system.titleDie}
              onChange={(e) => actor.setTitleDie(e.target.value)}
            >
              <option value="d4">d4</option>
              <option value="d6">d6</option>
              <option value="d10">d10</option>
              <option value="d12">d12</option>
            </select>
          </label>
        </div>
        <div css={{ gridColumn: "4/-1" }}>
          <label>
            Name
            <AsyncTextInput value={actor.name ?? ""} onChange={actor.setName} />
          </label>
        </div>
        <div css={{ gridColumn: "1/4" }}>
          <label>
            Order
            <AsyncTextInput
              value={actor.system.order}
              onChange={actor.setOrder}
            />
          </label>
        </div>
        <div css={{ gridColumn: "4/6" }}>
          <label>
            Order Quest
            <AsyncTextInput
              value={actor.system.orderQuest.name}
              onChange={actor.setOrderQuestName}
            />
          </label>
        </div>
        <div css={{ gridColumn: "6/7" }}>
          <label>
            Completed?
            <Toggle
              checked={actor.system.orderQuest.completed}
              onChange={actor.setOrderQuestCompleted}
            />
          </label>
        </div>
        <div css={{ gridColumn: "1/4" }}>
          <label>
            Tenet
            <AsyncTextInput
              value={actor.system.tenet}
              onChange={actor.setTenet}
            />
          </label>
        </div>
        <div css={{ gridColumn: "4/6" }}>
          <label>
            Personal Quest
            <AsyncTextInput
              value={actor.system.personalQuest.name}
              onChange={actor.setPersonalQuestName}
            />
          </label>
        </div>
        <div css={{ gridColumn: "6/7" }}>
          <label>
            Completed?
            <Toggle
              checked={actor.system.personalQuest.completed}
              onChange={actor.setPersonalQuestCompleted}
            />
          </label>
        </div>
        <div css={{ gridColumn: "1/-1" }}>drinks</div>
        <div css={{ gridColumn: "1/4" }}>conditions</div>{" "}
        <div css={{ gridColumn: "4/-1" }}>notes</div>
      </div>
    </CSSReset>
  );
};

PCSheet.displayName = "PCSheet";

import React from "react";

import { CSSReset } from "../copiedFromInvestigator/components/CSSReset";
import { loveYaLikeASister } from "../copiedFromInvestigator/themes/constants";
import { pubTheme } from "../copiedFromInvestigator/themes/pubTheme";
import { CharacterActor } from "../v10Types";
import { ConditionsList } from "./ConditionsList";
import { DrinksCounter } from "./DrinksCounter";
import { DrinksList } from "./DrinksList";
import { Notes } from "./Notes";
import { Panel } from "./Panel";
import { Roll } from "./Roll";
import { TopBits } from "./TopBits";

interface CharacterSheetProps {
  actor: CharacterActor;
  foundryApplication: Application;
}

export const CharacterSheet: React.FC<CharacterSheetProps> = ({
  actor,
  foundryApplication,
}) => {
  return (
    <CSSReset theme={pubTheme} mode="large">
      <div
        className="css-reset"
        css={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          // backgroundColor: "#ecb692",
          backgroundColor: "#dbb9a2",
          padding: "1em",
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows:
            "min-content [top] min-content [roll] min-content [drinks-list] 1fr [notes] 1fr [end]",
          rowGap: "0.5em",
          columnGap: "0.5em",
        }}
      >
        <div css={{ gridColumn: "1/2", display: "flex", flexDirection: "row" }}>
          <div>image</div>
        </div>
        <Panel
          css={{
            padding: "0 0 0 0.5em",
            background: "#fffa",
            gridColumn: "2/-1",
            display: "flex",
            flexDirection: "row",
            font: loveYaLikeASister.fontFamily,
            fontSize: "3em",
            fontVariant: "small-caps",
            fontWeight: "bold",
          }}
        >
          <div>Pub Crusade</div>
        </Panel>
        <TopBits actor={actor} css={{ gridColumn: "1/-1", gridRow: "top" }} />
        <Roll
          css={{ gridColumn: "1/3", gridRow: "roll" }}
          title="Roll low"
          description="(violence, escalation, tomfoolery)"
          actor={actor}
          lowOrHigh="low"
        />
        <DrinksCounter
          actor={actor}
          css={{ gridColumn: "3/5", gridRow: "roll" }}
        />
        <Roll
          css={{ gridColumn: "5/7", gridRow: "roll" }}
          title="Roll high"
          description="(social, precision, be sensible)"
          actor={actor}
          lowOrHigh="high"
        />
        <DrinksList
          actor={actor}
          css={{ gridColumn: "1/-1", gridRow: "drinks-list" }}
        />
        <ConditionsList actor={actor} css={{ gridColumn: "1/3" }} />
        <Notes
          css={{ gridColumn: "3/-1", position: "relative" }}
          actor={actor}
        />
      </div>
    </CSSReset>
  );
};

CharacterSheet.displayName = "CharacterSheet";

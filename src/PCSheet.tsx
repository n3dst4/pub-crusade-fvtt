import React from "react";

import { CSSReset } from "./copiedFromInvestigator/components/CSSReset";
import { tealTheme } from "./copiedFromInvestigator/themes/tealTheme";

interface PCSheetProps {
  actor: Actor;
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
          gridTemplateRows: "auto auto 1fr 1fr",
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
        <div css={{ gridColumn: "1/3" }}>title</div>
        <div css={{ gridColumn: "3/4" }}>die</div>
        <div css={{ gridColumn: "4/-1" }}>name</div>
        <div css={{ gridColumn: "1/-1" }}>drinks</div>
        <div css={{ gridColumn: "1/4" }}>conditions</div>{" "}
        <div css={{ gridColumn: "4/-1" }}>notes</div>
      </div>
    </CSSReset>
  );
};

PCSheet.displayName = "PCSheet";

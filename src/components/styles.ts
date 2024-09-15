import { CSSObject } from "@lumphammer/investigator-fvtt-types";

export const blackboard: CSSObject = {
  background: `
  radial-gradient(closest-side, #fff3 0%, #fff0 100%),
  linear-gradient(180deg, #444 0%, #000 100%)`,
  boxShadow: "0 0 1em 0 #fff3 inset",
  borderStyle: "solid",
  borderWidth: "4px",
  borderRadius: "0.1em",
  borderColor: "#111 #666 #666 #111",
  textShadow: "0 0 0.5em #aaa",
  color: "#eee",
};

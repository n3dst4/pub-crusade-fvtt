import { SeedColorsV1 } from "@lumphammer/investigator-fvtt-types";

import { systemId } from "../constants";
import { averiaLibre } from "../copiedFromInvestigator/themes/constants";
import { themeFactory } from "../copiedFromInvestigator/themes/functions";
import { ThemeV1 } from "../copiedFromInvestigator/themes/types";

const colors: SeedColorsV1 = {
  accent: "#8f4927",
  accentContrast: "white",
  glow: "#db9c7e",
  wallpaper: "#34231a",
  backgroundSecondary: "#fff9",
  backgroundPrimary: "#fffb",
  backgroundButton: "rgba(0,0,0,0.1)",
  text: "#433",
};

const shadowBase = "#000000";
const shadow1 = `${shadowBase}17`;
const shadow2 = `${shadowBase}00`;

export const pubTheme: ThemeV1 = themeFactory({
  schemaVersion: "v1",
  displayName: "Teal of Cthulhu",
  global: `
    @import url('https://fonts.googleapis.com/css2?family=Love+Ya+Like+A+Sister&display=swap');
    ${averiaLibre.importStatement}
  `,
  largeSheetRootStyle: {
    backgroundImage: `
    linear-gradient(180deg, #fff4 0%, #fffb 50%, #fff2 100%),
    url(systems/${systemId}/assets/rachel-kelli-n7MMvJFAp8Q-unsplash.webp)
    `,
  },
  bodyFont: averiaLibre.fontFamily,
  displayFont: "normal normal normal 1em 'Averia Libre', serif",
  logo: {
    frontTextElementStyle: {
      background: "linear-gradient(135deg, #efb183 0%,#222 30%,#efb183 90%)",
      backgroundClip: "text",
    },
    rearTextElementStyle: {
      textShadow:
        "2px 0px 1px black, 6px 0px 4px rgba(0,0,0,0.5), -1px 0px 0px rgba(255,255,255,0.5)",
    },
    textElementsStyle: {
      transform: "rotateY(-30deg) rotateZ(-1deg) translateX(-5%)",
    },
    backdropStyle: {
      perspective: "500px",
      perspectiveOrigin: "50% 50%",
      backgroundImage:
        "radial-gradient(closest-side, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)",
    },
  },
  tabActiveStyle: {
    background: colors.backgroundPrimary,
    ":hover": {
      textShadow: "none",
    },
    borderStyle: "solid solid none solid",
  },
  tabStyle: {
    flex: 1,
    padding: "0.3em",
    display: "inline-block",
    textAlign: "center",
    fontSize: "1.4em",
    background: colors.backgroundSecondary,
    borderRadius: "0.5em 0.5em 0 0",
    color: colors.accent,
    ":hover": {
      textShadow: `0 0 0.3em ${colors.glow}`,
    },
    borderWidth: "1px",
    borderStyle: "solid solid solid solid",
    borderColor: "#0007",
    backgroundImage: `linear-gradient(to top, ${shadow1} 0%, ${shadow2} 15%)`,
  },
  tabSpacerStyle: {
    width: "0.5em",
    borderWidth: "1px",
    borderStyle: "none none solid none",
    borderColor: "#0007",
  },
  panelStylePrimary: {
    backgroundColor: colors.backgroundPrimary,
    borderWidth: "1px",
    borderStyle: "none solid solid solid",
    borderColor: "#0007",
  },
  tabContentStyle: {
    backgroundColor: colors.backgroundPrimary,
    borderWidth: "1px",
    borderStyle: "none solid solid solid",
    borderColor: "#0007",
  },

  colors,
});

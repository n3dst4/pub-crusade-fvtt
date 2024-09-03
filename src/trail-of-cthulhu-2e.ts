import {
  PresetV1,
  SeedColorsV1,
  Stat,
  ThemeSeedV1,
} from "@lumphammer/investigator-fvtt-types";

// const assetPath = getRoute("/modules/trail-of-cthulhu-2e/assets");
const maroon = "#6e1f19";
const key = "trail-of-cthulhu-2e";
const displayName = "Trail of Cthulhu 2nd Edition";

const colors: SeedColorsV1 = {
  accent: "#cc261b", // "#ff3427",
  accentContrast: "#fff",
  glow: "#ff7523",
  wallpaper: "#eee", //
  backgroundSecondary: "#fff9",
  backgroundPrimary: "#fff",
  backgroundButton: "rgba(0,0,0,0.1)",
  text: maroon,
};

const seed: ThemeSeedV1 = {
  schemaVersion: "v1",
  displayName,
  largeSheetRootStyle: {},
  bodyFont: "16px 'Acanthus SSi', sans-serif",
  displayFont: "normal normal normal 1.1em 'Augusta', serif",
  tabClass: "chip",
  tabStyle: {},
  tabActiveStyle: {},
  panelClass: "chip",
  panelStylePrimary: {},
  panelStyleSecondary: {},
  logo: {
    fontScaleFactor: 20,
    frontTextElementStyle: {},
    rearTextElementStyle: {},
    textElementsStyle: {},
    backdropStyle: {},
  },
  colors: {
    ...colors,
  },
};

const pcStats: Record<string, Stat> = {
  grit: {
    name: "Grit",
    default: 0,
  },
  armor: {
    name: "Armor",
    default: 0,
  },
  healthThreshold: {
    name: "Health Threshold",
    default: 0,
  },
  moraleThreshold: {
    name: "Morale Threshold",
    default: 0,
  },
};

const npcStats: Record<string, Stat> = {
  ...pcStats,
  alertness: {
    name: "Alertness",
    default: 0,
  },
  stealth: {
    name: "Stealth",
    default: 0,
  },
};

const preset: PresetV1 = {
  schemaVersion: "v1",
  combatAbilities: ["Sorcery", "Sway", "Warfare"],
  defaultThemeName: key,
  displayName,
  generalAbilityCategories: ["General"],
  investigativeAbilityCategories: [
    "Social",
    "Sentinel",
    "Thief",
    "Sorceror",
    "Warrior",
    "Allegiances",
  ],
  longNotes: ["What is best in life?", "Adjectives", "Notes"],
  newPCPacks: ["swords-of-the-serpentine.abilities"],
  newNPCPacks: [
    "swords-of-the-serpentine.abilities",
    "swords-of-the-serpentine.npcextras",
  ],
  occupationLabel: "Profession",
  useBoost: false,
  genericOccupation: "Hero",
  showEmptyInvestigativeCategories: false,
  mwUseAlternativeItemTypes: false,
  useMwStyleAbilities: false,
  mwHiddenShortNotes: [],
  useMwInjuryStatus: false,
  pcStats,
  npcStats,
  useNpcCombatBonuses: true,
  useTurnPassingInitiative: true,
  equipmentCategories: {
    general: {
      name: "General Gear",
      fields: {},
    },
    _7ADYM2jclkCBZRhpjBfU: {
      name: "Minor, Iconic Gear",
      fields: {},
    },
  },
  personalDetails: [
    {
      name: "Is True Name Known?",
      type: "text",
    },
  ],
};

console.log("[Swords of the Serpentine] initializing");
CONFIG.Investigator?.installTheme(key, seed);
CONFIG.Investigator?.installPreset(key, preset);

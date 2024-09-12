import { ReactApplicationMixin } from "@lumphammer/shared-fvtt-bits/src/ReactApplicationMixin";
import React from "react";

import { reactTemplatePath, systemId } from "./constants";
import { PCSheet } from "./PCSheet";

/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
class PCSheetClassBase extends ActorSheet {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: [systemId, "sheet", "actor"],
      template: reactTemplatePath,
      width: 777,
      height: 900,
    });
  }
}

const render = (sheet: PCSheetClassBase) => {
  return <PCSheet actor={sheet.document} foundryApplication={sheet} />;
};

export const PCSheetClass = ReactApplicationMixin(
  "PCSheetClass",
  PCSheetClassBase,
  render,
);

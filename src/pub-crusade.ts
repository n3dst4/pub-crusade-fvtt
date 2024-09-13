import * as constants from "./constants";
import { systemLogger } from "./copiedFromInvestigator/functions/utilities";
import { CharacterSheetClass } from "./module/CharacterSheetClass";
import { PubCrusadeActor } from "./module/PubCrusadeActor";
import processedStyles from "./sass/pub-crusade.scss?inline";

// https://foundryvtt.com/article/system-development/

const { HTMLField, StringField, SchemaField, BooleanField, ArrayField } =
  foundry.data.fields;

// https://foundryvtt.com/article/system-data-models/
export class CharacterData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      title: new StringField(),
      titleDie: new StringField({ initial: "d6" }),
      notes: new HTMLField(),
      order: new StringField(),
      tenet: new StringField(),
      personalQuest: new SchemaField({
        name: new StringField(),
        completed: new BooleanField(),
      }),
      orderQuest: new SchemaField({
        name: new StringField(),
        completed: new BooleanField(),
      }),
      conditions: new ArrayField(
        new SchemaField({
          id: new StringField(),
          name: new StringField(),
        }),
      ),
      drinks: new ArrayField(
        new SchemaField({
          id: new StringField(),
          what: new StringField(),
          where: new StringField(),
        }),
      ),
    };
  }
}

// Inject CSS
// normal css imports don't work in foundry because the html is loaded from
// foundry itself and vite's css injection never kicks in. So we have to
// import the css as a string and inject it ourselves.
const styleElement = document.createElement("style");
styleElement.innerHTML = processedStyles;
document.head.appendChild(styleElement);

console.log("Pub Crusade loading");

Hooks.once("init", () => {
  systemLogger.log("Initializing");

  // data models
  CONFIG.Actor.dataModels["character"] = CharacterData;

  // document classes
  CONFIG.Actor.documentClass = PubCrusadeActor;

  // sheets
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet(constants.systemId, CharacterSheetClass, {
    makeDefault: true,
    types: [constants.character],
  });
});

declare global {
  namespace foundry {
    namespace data.fields {
      class SchemaField {
        constructor(fields: Record<string, any>);
      }
      class HTMLField {}
      class NumberField {
        constructor(fields: Record<string, any>);
      }
      class StringField {
        constructor(options?: Record<string, any>);
      }
      class FilePathField {
        constructor(fields: Record<string, any>);
      }
      class ArrayField {
        constructor(type: any);
      }
      class BooleanField {
        constructor();
      }
    }
    namespace abstract {
      class TypeDataModel {}
    }
  }
  interface CONFIG {
    Actor: {
      dataModels: Record<string, any>;
      documentClass: typeof Actor;
    };
    // dataModels: Record<string, any>;
  }
}

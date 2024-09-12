import {

const {
  HTMLField,
  NumberField,
  StringField,
  SchemaField,
  BooleanField,
  ArrayField,
} = foundry.data.fields;

export class CharacterData extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      description: new HTMLField(),
      quest: new SchemaField({
        name: new StringField(),
        completed: new BooleanField(),
      }),
      conditions: new ArrayField(
        new SchemaField({
          id: new StringField(),
          name: new StringField(),
        }),
      ),
      tenet: new StringField(),
      drinks: new NumberField({
        required: true,
        integer: true,
        min: 0,
        initial: 0,
        max: 9,
      }),
    };
  }
}

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
        constructor();
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
}

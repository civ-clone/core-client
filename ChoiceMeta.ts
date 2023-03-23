import {
  DataObject,
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';
import Choice from './Choice';
import Civilization from '@civ-clone/core-civilization/Civilization';
import { IConstructor } from '@civ-clone/core-registry/Registry';
import Leader from '@civ-clone/core-civilization/Leader';

declare global {
  interface ChoiceMetaDataMap {
    'choose-civilization': IConstructor<Civilization>;
    'choose-leader': IConstructor<Leader>;
  }
}

export type ChoiceMetaData = {
  [Name in keyof ChoiceMetaDataMap]: ChoiceMeta<Name>;
}[keyof ChoiceMetaDataMap];

export type KeyForChoiceMeta<Meta> = Meta extends ChoiceMeta<infer K>
  ? K
  : never;

export type DataForChoiceMeta<Meta> = ChoiceMetaDataMap[KeyForChoiceMeta<Meta>];

export interface IChoiceMeta<
  Key extends keyof ChoiceMetaDataMap,
  Data = unknown
> extends IDataObject {
  choices(): Choice<ChoiceMetaDataMap[Key]>[];
  data(): Data | undefined;
  key(): Key;
}

export class ChoiceMeta<Key extends keyof ChoiceMetaDataMap, Data = unknown>
  extends DataObject
  implements IChoiceMeta<Key, Data>
{
  #choices: Choice<ChoiceMetaDataMap[Key]>[] = [];
  #data: Data | undefined;
  #key: Key;

  constructor(entities: ChoiceMetaDataMap[Key][], key: Key, data?: Data) {
    super();

    this.addKey('choices', 'data', 'key');

    entities.forEach((choice) => this.#choices.push(new Choice(choice)));
    this.#data = data;
    this.#key = key;
  }

  choices(): Choice<ChoiceMetaDataMap[Key]>[] {
    return this.#choices;
  }

  /**
   * Supplementary data to assist in making a decision.
   */
  data(): Data | undefined {
    return this.#data;
  }

  key(): Key {
    return this.#key;
  }
}

export default ChoiceMeta;

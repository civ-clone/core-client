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

export interface IChoiceMeta<Key, Data> extends IDataObject {
  choices(): Choice<Data>[];
  key(): Key;
}

export class ChoiceMeta<Key extends keyof ChoiceMetaDataMap>
  extends DataObject
  implements IChoiceMeta<Key, ChoiceMetaDataMap[Key]> {
  #choices: Choice<ChoiceMetaDataMap[Key]>[] = [];
  #key: Key;

  constructor(entities: ChoiceMetaDataMap[Key][], key: Key) {
    super();

    this.addKey('choices', 'key');

    entities.forEach((choice) => this.#choices.push(new Choice(choice)));
    this.#key = key;
  }

  choices(): Choice<ChoiceMetaDataMap[Key]>[] {
    return this.#choices;
  }

  key(): Key {
    return this.#key;
  }
}

export default ChoiceMeta;

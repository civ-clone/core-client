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
export declare type ChoiceMetaData = {
  [Name in keyof ChoiceMetaDataMap]: ChoiceMeta<Name>;
}[keyof ChoiceMetaDataMap];
export declare type KeyForChoiceMeta<Meta> = Meta extends ChoiceMeta<infer K>
  ? K
  : never;
export declare type DataForChoiceMeta<
  Meta
> = ChoiceMetaDataMap[KeyForChoiceMeta<Meta>];
export interface IChoiceMeta<Key, Data> extends IDataObject {
  choices(): Choice<Data>[];
  key(): Key;
}
export declare class ChoiceMeta<Key extends keyof ChoiceMetaDataMap>
  extends DataObject
  implements IChoiceMeta<Key, ChoiceMetaDataMap[Key]> {
  #private;
  constructor(entities: ChoiceMetaDataMap[Key][], key: Key);
  choices(): Choice<ChoiceMetaDataMap[Key]>[];
  key(): Key;
}
export default ChoiceMeta;

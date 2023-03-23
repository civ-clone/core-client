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
export declare class ChoiceMeta<
    Key extends keyof ChoiceMetaDataMap,
    Data = unknown
  >
  extends DataObject
  implements IChoiceMeta<Key, Data>
{
  #private;
  constructor(entities: ChoiceMetaDataMap[Key][], key: Key, data?: Data);
  choices(): Choice<ChoiceMetaDataMap[Key]>[];
  /**
   * Supplementary data to assist in making a decision.
   */
  data(): Data | undefined;
  key(): Key;
}
export default ChoiceMeta;

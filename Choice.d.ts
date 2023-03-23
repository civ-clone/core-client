import {
  DataObject,
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';
export interface IChoice<Data> extends IDataObject {
  value(): Data;
}
export declare class Choice<Data = unknown>
  extends DataObject
  implements IChoice<Data>
{
  #private;
  constructor(value: Data);
  value(): Data;
}
export default Choice;

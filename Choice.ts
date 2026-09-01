import {
  DataObject,
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';

export interface IChoice<Data> extends IDataObject {
  value(): Data;
}

export class Choice<Data = unknown>
  extends DataObject
  implements IChoice<Data>
{
  private _value: Data;

  constructor(value: Data) {
    super();

    this.addKey('value');

    this._value = value;
  }

  value(): Data {
    return this._value;
  }
}

export default Choice;

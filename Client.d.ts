import { ChoiceMeta, ChoiceMetaData, DataForChoiceMeta } from './ChoiceMeta';
import Player from '@civ-clone/core-player/Player';
export interface IClient {
  chooseFromList(
    meta: ChoiceMetaData
  ): Promise<DataForChoiceMeta<ChoiceMetaData>>;
  player(): Player;
  takeTurn(): Promise<any>;
}
export declare class Client implements IClient {
  #private;
  constructor(player: Player, randomNumberGenerator?: () => number);
  chooseFromList<Name extends keyof ChoiceMetaDataMap>(
    meta: ChoiceMeta<Name>
  ): Promise<DataForChoiceMeta<ChoiceMeta<Name>>>;
  player(): Player;
  takeTurn(): Promise<any>;
}
export default Client;

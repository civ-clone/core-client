import Player from '@civ-clone/core-player/Player';
export interface IClient {
  player(): Player;
  takeTurn(): Promise<any>;
}
export declare class Client implements IClient {
  #private;
  constructor(player: Player);
  player(): Player;
  takeTurn(): Promise<any>;
}
export default Client;

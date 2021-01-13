import Player from '@civ-clone/core-player/Player';

export interface IClient {
  player(): Player;
  takeTurn(): Promise<any>;
}

export class Client implements IClient {
  #player: Player;

  constructor(player: Player) {
    this.#player = player;
  }

  player(): Player {
    return this.#player;
  }

  takeTurn(): Promise<any> {
    return new Promise(
      (
        resolve: (value?: any | PromiseLike<any>) => void,
        reject: (reason?: any) => void
      ): void => reject(new TypeError('Client#takeTurn must be implemented.'))
    );
  }
}

export default Client;

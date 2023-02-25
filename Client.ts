import { ChoiceMeta, ChoiceMetaData, DataForChoiceMeta } from './ChoiceMeta';
import Player from '@civ-clone/core-player/Player';

export interface IClient {
  chooseFromList(
    meta: ChoiceMetaData
  ): Promise<DataForChoiceMeta<ChoiceMetaData>>;
  player(): Player;
  takeTurn(): Promise<any>;
}

export class Client implements IClient {
  #player: Player;
  #randomNumberGenerator: () => number;

  constructor(
    player: Player,
    randomNumberGenerator: () => number = () => Math.random()
  ) {
    this.#player = player;
    this.#randomNumberGenerator = randomNumberGenerator;
  }

  async chooseFromList<Name extends keyof ChoiceMetaDataMap>(
    meta: ChoiceMeta<Name>
  ): Promise<DataForChoiceMeta<ChoiceMeta<Name>>> {
    const choices = meta.choices(),
      randomChoice =
        choices[Math.floor(this.#randomNumberGenerator() * choices.length)];

    return randomChoice.value();
  }

  player(): Player {
    return this.#player;
  }

  async takeTurn(): Promise<any> {
    throw new TypeError('Client#takeTurn must be implemented.');
  }
}

export default Client;

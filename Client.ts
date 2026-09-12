import { ChoiceMeta, ChoiceMetaData, DataForChoiceMeta } from './ChoiceMeta';
import Player from '@civ-clone/core-player/Player';
import { instance as rngInstance } from '@civ-clone/core-random';

export interface IClient {
  chooseFromList(
    meta: ChoiceMetaData
  ): Promise<DataForChoiceMeta<ChoiceMetaData>>;
  player(): Player;
  takeTurn(): Promise<any>;
}

export class Client implements IClient {
  private _player: Player;
  // `protected` because `core-civ-client`'s `Client` and `SimpleAIClient` both
  // declared their own `#randomNumberGenerator` shadowing this one, which two
  // `private` fields of the same name cannot express. They now forward their
  // generator to this constructor instead of keeping a second copy.
  protected _randomNumberGenerator: () => number;

  constructor(
    player: Player,
    randomNumberGenerator: () => number = rngInstance
  ) {
    this._player = player;
    this._randomNumberGenerator = randomNumberGenerator;
  }

  async chooseFromList<Name extends keyof ChoiceMetaDataMap>(
    meta: ChoiceMeta<Name>
  ): Promise<DataForChoiceMeta<ChoiceMeta<Name>>> {
    const choices = meta.choices(),
      randomChoice =
        choices[Math.floor(this._randomNumberGenerator() * choices.length)];

    return randomChoice.value();
  }

  player(): Player {
    return this._player;
  }

  async takeTurn(): Promise<any> {
    throw new TypeError('Client#takeTurn must be implemented.');
  }
}

export default Client;

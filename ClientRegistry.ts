import {
  EntityRegistry,
  IEntityRegistry,
} from '@civ-clone/core-registry/EntityRegistry';
import Client from './Client';
import Player from '@civ-clone/core-player/Player';

export interface IClientRegistry extends IEntityRegistry<Client> {
  getByPlayer(player: Player): Client;
}

export class ClientRegistry
  extends EntityRegistry<Client>
  implements IClientRegistry {
  constructor() {
    super(Client);
  }

  getByPlayer(player: Player): Client {
    const clients = this.getBy('player', player);

    if (clients.length !== 1) {
      throw new TypeError('Wrong number of Clients for Player.');
    }

    return clients[0];
  }
}

export const instance: ClientRegistry = new ClientRegistry();

export default ClientRegistry;

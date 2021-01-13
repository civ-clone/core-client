import {
  EntityRegistry,
  IEntityRegistry,
} from '@civ-clone/core-registry/EntityRegistry';
import Client from './Client';
import Player from '@civ-clone/core-player/Player';
export interface IClientRegistry extends IEntityRegistry<Client> {
  getByPlayer(player: Player): Client;
}
export declare class ClientRegistry
  extends EntityRegistry<Client>
  implements IClientRegistry {
  constructor();
  getByPlayer(player: Player): Client;
}
export declare const instance: ClientRegistry;
export default ClientRegistry;

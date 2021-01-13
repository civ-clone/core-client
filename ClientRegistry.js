"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = exports.ClientRegistry = void 0;
const EntityRegistry_1 = require("@civ-clone/core-registry/EntityRegistry");
const Client_1 = require("./Client");
class ClientRegistry extends EntityRegistry_1.EntityRegistry {
    constructor() {
        super(Client_1.default);
    }
    getByPlayer(player) {
        const clients = this.getBy('player', player);
        if (clients.length !== 1) {
            throw new TypeError('Wrong number of Clients for Player.');
        }
        return clients[0];
    }
}
exports.ClientRegistry = ClientRegistry;
exports.instance = new ClientRegistry();
exports.default = ClientRegistry;
//# sourceMappingURL=ClientRegistry.js.map
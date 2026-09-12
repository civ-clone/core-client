"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const core_random_1 = require("@civ-clone/core-random");
class Client {
    constructor(player, randomNumberGenerator = core_random_1.instance) {
        this._player = player;
        this._randomNumberGenerator = randomNumberGenerator;
    }
    async chooseFromList(meta) {
        const choices = meta.choices(), randomChoice = choices[Math.floor(this._randomNumberGenerator() * choices.length)];
        return randomChoice.value();
    }
    player() {
        return this._player;
    }
    async takeTurn() {
        throw new TypeError('Client#takeTurn must be implemented.');
    }
}
exports.Client = Client;
exports.default = Client;
//# sourceMappingURL=Client.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(player, randomNumberGenerator = () => Math.random()) {
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
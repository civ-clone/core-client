"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _player, _randomNumberGenerator;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(player, randomNumberGenerator = () => Math.random()) {
        _player.set(this, void 0);
        _randomNumberGenerator.set(this, void 0);
        __classPrivateFieldSet(this, _player, player);
        __classPrivateFieldSet(this, _randomNumberGenerator, randomNumberGenerator);
    }
    async chooseFromList(meta) {
        const choices = meta.choices(), randomChoice = choices[Math.floor(__classPrivateFieldGet(this, _randomNumberGenerator).call(this) * choices.length)];
        return randomChoice.value();
    }
    player() {
        return __classPrivateFieldGet(this, _player);
    }
    async takeTurn() {
        throw new TypeError('Client#takeTurn must be implemented.');
    }
}
exports.Client = Client;
_player = new WeakMap(), _randomNumberGenerator = new WeakMap();
exports.default = Client;
//# sourceMappingURL=Client.js.map
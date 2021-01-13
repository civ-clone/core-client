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
var _player;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(player) {
        _player.set(this, void 0);
        __classPrivateFieldSet(this, _player, player);
    }
    player() {
        return __classPrivateFieldGet(this, _player);
    }
    takeTurn() {
        return new Promise((resolve, reject) => reject(new TypeError('Client#takeTurn must be implemented.')));
    }
}
exports.Client = Client;
_player = new WeakMap();
exports.default = Client;
//# sourceMappingURL=Client.js.map
"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Client_player, _Client_randomNumberGenerator;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(player, randomNumberGenerator = () => Math.random()) {
        _Client_player.set(this, void 0);
        _Client_randomNumberGenerator.set(this, void 0);
        __classPrivateFieldSet(this, _Client_player, player, "f");
        __classPrivateFieldSet(this, _Client_randomNumberGenerator, randomNumberGenerator, "f");
    }
    async chooseFromList(meta) {
        const choices = meta.choices(), randomChoice = choices[Math.floor(__classPrivateFieldGet(this, _Client_randomNumberGenerator, "f").call(this) * choices.length)];
        return randomChoice.value();
    }
    player() {
        return __classPrivateFieldGet(this, _Client_player, "f");
    }
    async takeTurn() {
        throw new TypeError('Client#takeTurn must be implemented.');
    }
}
exports.Client = Client;
_Client_player = new WeakMap(), _Client_randomNumberGenerator = new WeakMap();
exports.default = Client;
//# sourceMappingURL=Client.js.map
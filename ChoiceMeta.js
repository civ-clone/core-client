"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _choices, _key;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChoiceMeta = void 0;
const DataObject_1 = require("@civ-clone/core-data-object/DataObject");
const Choice_1 = require("./Choice");
class ChoiceMeta extends DataObject_1.DataObject {
    constructor(entities, key) {
        super();
        _choices.set(this, []);
        _key.set(this, void 0);
        this.addKey('choices', 'key');
        entities.forEach((choice) => __classPrivateFieldGet(this, _choices).push(new Choice_1.default(choice)));
        __classPrivateFieldSet(this, _key, key);
    }
    choices() {
        return __classPrivateFieldGet(this, _choices);
    }
    key() {
        return __classPrivateFieldGet(this, _key);
    }
}
exports.ChoiceMeta = ChoiceMeta;
_choices = new WeakMap(), _key = new WeakMap();
exports.default = ChoiceMeta;
//# sourceMappingURL=ChoiceMeta.js.map
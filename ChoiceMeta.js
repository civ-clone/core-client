"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ChoiceMeta_choices, _ChoiceMeta_data, _ChoiceMeta_key;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChoiceMeta = void 0;
const DataObject_1 = require("@civ-clone/core-data-object/DataObject");
const Choice_1 = require("./Choice");
class ChoiceMeta extends DataObject_1.DataObject {
    constructor(entities, key, data) {
        super();
        _ChoiceMeta_choices.set(this, []);
        _ChoiceMeta_data.set(this, void 0);
        _ChoiceMeta_key.set(this, void 0);
        this.addKey('choices', 'data', 'key');
        entities.forEach((choice) => __classPrivateFieldGet(this, _ChoiceMeta_choices, "f").push(new Choice_1.default(choice)));
        __classPrivateFieldSet(this, _ChoiceMeta_data, data, "f");
        __classPrivateFieldSet(this, _ChoiceMeta_key, key, "f");
    }
    choices() {
        return __classPrivateFieldGet(this, _ChoiceMeta_choices, "f");
    }
    /**
     * Supplementary data to assist in making a decision.
     */
    data() {
        return __classPrivateFieldGet(this, _ChoiceMeta_data, "f");
    }
    key() {
        return __classPrivateFieldGet(this, _ChoiceMeta_key, "f");
    }
}
exports.ChoiceMeta = ChoiceMeta;
_ChoiceMeta_choices = new WeakMap(), _ChoiceMeta_data = new WeakMap(), _ChoiceMeta_key = new WeakMap();
exports.default = ChoiceMeta;
//# sourceMappingURL=ChoiceMeta.js.map
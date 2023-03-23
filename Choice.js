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
var _Choice_value;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Choice = void 0;
const DataObject_1 = require("@civ-clone/core-data-object/DataObject");
class Choice extends DataObject_1.DataObject {
    constructor(value) {
        super();
        _Choice_value.set(this, void 0);
        this.addKey('value');
        __classPrivateFieldSet(this, _Choice_value, value, "f");
    }
    value() {
        return __classPrivateFieldGet(this, _Choice_value, "f");
    }
}
exports.Choice = Choice;
_Choice_value = new WeakMap();
exports.default = Choice;
//# sourceMappingURL=Choice.js.map
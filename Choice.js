"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Choice = void 0;
const DataObject_1 = require("@civ-clone/core-data-object/DataObject");
class Choice extends DataObject_1.DataObject {
    constructor(value) {
        super();
        this.addKey('value');
        this._value = value;
    }
    value() {
        return this._value;
    }
}
exports.Choice = Choice;
exports.default = Choice;
//# sourceMappingURL=Choice.js.map
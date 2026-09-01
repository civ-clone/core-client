"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChoiceMeta = void 0;
const DataObject_1 = require("@civ-clone/core-data-object/DataObject");
const Choice_1 = require("./Choice");
class ChoiceMeta extends DataObject_1.DataObject {
    constructor(entities, key, data) {
        super();
        this._choices = [];
        this.addKey('choices', 'data', 'key');
        entities.forEach((choice) => this._choices.push(new Choice_1.default(choice)));
        this._data = data;
        this._key = key;
    }
    choices() {
        return this._choices;
    }
    /**
     * Supplementary data to assist in making a decision.
     */
    data() {
        return this._data;
    }
    key() {
        return this._key;
    }
}
exports.ChoiceMeta = ChoiceMeta;
exports.default = ChoiceMeta;
//# sourceMappingURL=ChoiceMeta.js.map
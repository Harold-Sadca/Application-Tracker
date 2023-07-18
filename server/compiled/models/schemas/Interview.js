"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const mongodb_1 = require("mongodb");
const Schema = __1.default.Schema;
const interviewSchema = new Schema({
    id: mongodb_1.ObjectId,
    time: { type: String, required: true },
    date: { type: Date, required: true },
    application: [{ type: Schema.Types.ObjectId, ref: 'Application' }],
});
const Interview = __1.default.model('Interview', interviewSchema);
exports.default = Interview;

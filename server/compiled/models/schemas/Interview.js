"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const Schema = __1.default.Schema;
const interviewSchema = new Schema({
    time: { type: String, required: true },
    date: { type: Date, required: true },
    application: { type: Schema.Types.ObjectId, ref: 'Application' },
    result: {
        type: String,
        enum: ['Passed', 'Failed'],
    },
});
const Interview = __1.default.model('Interview', interviewSchema);
exports.default = Interview;

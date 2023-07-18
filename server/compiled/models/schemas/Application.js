"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const mongodb_1 = require("mongodb");
const Schema = __1.default.Schema;
const applicationSchema = new Schema({
    id: mongodb_1.ObjectId,
    company: { type: String, required: true },
    date: { type: Date, required: true },
    status: {
        type: String,
        enum: ['To Apply', 'Applied', 'Interview Scheduled', 'Interviewing', 'Offer Received', 'Offer Rejected', 'Rejected']
    },
});
const Application = __1.default.model('Application', applicationSchema);
exports.default = Application;

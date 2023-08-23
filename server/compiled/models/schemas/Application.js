"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const Schema = __1.default.Schema;
const applicationSchema = new Schema({
    company: { type: String, required: true },
    date: { type: Date, required: true },
    status: {
        type: String,
        enum: [
            'To Apply',
            'Applied',
            'Interview Scheduled',
            'Interviewing',
            'Offer Received',
            'Offer Rejected',
            'Rejected',
        ],
    },
    applicant: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    nextInterview: {
        type: Schema.Types.ObjectId,
        ref: 'Interview',
    },
});
const Application = __1.default.model('Application', applicationSchema);
exports.default = Application;

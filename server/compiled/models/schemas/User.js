"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const mongodb_1 = require("mongodb");
const Schema = index_1.default.Schema;
const userSchema = new Schema({
    id: mongodb_1.ObjectId,
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});
const User = index_1.default.model('User', userSchema);
exports.default = User;

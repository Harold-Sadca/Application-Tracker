"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const passport_local_mongoose_1 = __importDefault(require("passport-local-mongoose"));
const Schema = index_1.default.Schema;
const userSchema = new Schema({
    email: { type: String, required: true } || null,
    applications: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
});
userSchema.plugin(passport_local_mongoose_1.default);
const User = index_1.default.model('User', userSchema);
exports.default = User;

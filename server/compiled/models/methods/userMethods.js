"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUser = exports.createUser = void 0;
const User_1 = __importDefault(require("../schemas/User"));
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, username, password } = user;
    try {
        const newUser = new User_1.default({ username, email });
        const registeredUser = yield User_1.default.register(newUser, password);
        return registeredUser;
    }
    catch (error) {
        console.log(error);
    }
});
exports.createUser = createUser;
const findUser = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.findOne({ _id }).populate({
            path: 'applications',
            populate: {
                path: 'nextInterview',
            },
        });
        return user;
    }
    catch (error) {
        console.log(error);
    }
});
exports.findUser = findUser;

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
exports.login = exports.createUser = void 0;
const User_1 = __importDefault(require("../schemas/User"));
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = User_1.default.create(user);
        return newUser;
    }
    catch (error) {
        console.log(error);
    }
});
exports.createUser = createUser;
const login = (name, password) => __awaiter(void 0, void 0, void 0, function* () {
    //compare here later
    try {
        const user = User_1.default.findOne({ name });
        return user;
    }
    catch (error) {
        console.log(error);
    }
});
exports.login = login;

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = exports.createUserController = void 0;
const userMethods_1 = require("../models/methods/userMethods");
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        if (name && email && password) {
            const user = { name, email, password };
            const newUser = yield (0, userMethods_1.createUser)(user);
            res.status(201).send(newUser);
        }
        else {
            res.status(400).send(JSON.stringify('Missing Credentials.'));
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.createUserController = createUserController;
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, password } = req.body;
        if (name && password) {
            const user = yield (0, userMethods_1.login)(name, password);
            res.status(200).send(user);
        }
        else {
            res.status(400).send(JSON.stringify('Missing Credentials'));
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.loginController = loginController;
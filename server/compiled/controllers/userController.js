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
exports.loginController = exports.createUserController = void 0;
const passport_1 = __importDefault(require("passport"));
const userMethods_1 = require("../models/methods/userMethods");
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        if (username && email && password) {
            const user = { username, email, password };
            const newUser = yield (0, userMethods_1.createUser)(user);
            console.log(newUser);
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
const loginController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    passport_1.default.authenticate('local', (err, user, info) => {
        console.log(user);
        if (err)
            throw err;
        if (!user)
            res.send(JSON.stringify('No User Exists'));
        else {
            req.logIn(user, (err) => __awaiter(void 0, void 0, void 0, function* () {
                if (err)
                    throw err;
                console.log('got to login');
                const { id } = req.params;
                req.user = (yield (0, userMethods_1.findUser)(id));
                res.status(200).send(req.user);
            }));
        }
    })(req, res, next);
});
exports.loginController = loginController;

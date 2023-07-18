"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const userRouter = (0, express_1.Router)();
userRouter.post('/create', userController_1.createUserController);
userRouter.get('/login', userController_1.loginController);
exports.default = userRouter;

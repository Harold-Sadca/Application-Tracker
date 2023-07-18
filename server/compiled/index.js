"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const applicationRouter_1 = __importDefault(require("./routers/applicationRouter"));
const interviewRouter_1 = __importDefault(require("./routers/interviewRouter"));
const userRouter_1 = __importDefault(require("./routers/userRouter"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use('application', applicationRouter_1.default);
app.use('interview', interviewRouter_1.default);
app.use('user', userRouter_1.default);
app.listen(port, () => {
    console.log(`Running at ${port}`);
});

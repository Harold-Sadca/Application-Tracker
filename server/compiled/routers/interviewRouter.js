"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const interviewController_1 = require("../controllers/interviewController");
const interviewRouter = (0, express_1.Router)();
interviewRouter.post('/create', interviewController_1.createInterviewController);
interviewRouter.get('/get/:id', interviewController_1.getInterviewController);
interviewRouter.put('/update/:id', interviewController_1.updateInterviewController);
exports.default = interviewRouter;

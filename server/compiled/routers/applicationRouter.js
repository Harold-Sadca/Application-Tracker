"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const applicationController_1 = require("../controllers/applicationController");
const applicationRouter = (0, express_1.Router)();
applicationRouter.post('/create', applicationController_1.createApplicationController);
applicationRouter.get('/get/:id', applicationController_1.getApplicationController);
applicationRouter.put('/update/:id', applicationController_1.updateApplicationController);
exports.default = applicationRouter;

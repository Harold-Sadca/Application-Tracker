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
exports.updateApplicationController = exports.getApplicationController = exports.createApplicationController = void 0;
const applicationMethods_1 = require("../models/methods/applicationMethods");
const createApplicationController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { company, date, status } = req.body;
        if (company && date && status) {
            const application = { company, date, status };
            const newApplication = (0, applicationMethods_1.createApplication)(application);
            res.status(201).send(newApplication);
        }
        else {
            res.status(400).send((JSON.stringify('Missing Some Information.')));
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.createApplicationController = createApplicationController;
const getApplicationController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const application = (0, applicationMethods_1.getApplication)(id);
        res.status(200).send(application);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getApplicationController = getApplicationController;
const updateApplicationController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { company, date, status } = req.body;
        if (company && date && status && id) {
            const application = { company, date, status };
            const updatedApplication = (0, applicationMethods_1.updateApplication)(id, application);
            res.status(201).send(updatedApplication);
        }
        else {
            res.status(400).send((JSON.stringify('Missing Some Information.')));
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.updateApplicationController = updateApplicationController;
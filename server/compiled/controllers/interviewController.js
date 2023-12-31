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
exports.updateInterviewController = exports.getInterviewController = exports.createInterviewController = void 0;
const interviewMethods_1 = require("../models/methods/interviewMethods");
const createInterviewController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { application_id } = req.params;
        console.log(application_id);
        const { date, time, interviewType } = req.body;
        if (application_id && date && time && interviewType) {
            const interview = { date, time, interviewType };
            const newInterview = yield (0, interviewMethods_1.createInterview)(interview, application_id);
            res.status(201).send(newInterview);
        }
        else {
            res.status(400).send(JSON.stringify('Missing Some Information.'));
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.createInterviewController = createInterviewController;
const getInterviewController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const interview = yield (0, interviewMethods_1.getInterview)(id);
        res.status(200).send(interview);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getInterviewController = getInterviewController;
const updateInterviewController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { result } = req.body;
        console.log(id, result);
        if (result && id) {
            const updatedInterview = yield (0, interviewMethods_1.updateInterview)(id, result);
            res.status(200).send(updatedInterview);
        }
        else {
            res.status(400).send(JSON.stringify('Missing Some Information.'));
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.updateInterviewController = updateInterviewController;

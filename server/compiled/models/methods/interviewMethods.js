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
exports.updateInterview = exports.getInterview = exports.createInterview = void 0;
const Interview_1 = __importDefault(require("../schemas/Interview"));
const createInterview = (interview) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newInterview = Interview_1.default.create(interview);
        return newInterview;
    }
    catch (error) {
        console.log(error);
    }
});
exports.createInterview = createInterview;
const getInterview = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const interview = Interview_1.default.findById(id);
        return interview;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getInterview = getInterview;
const updateInterview = (id, interview) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedInterview = Interview_1.default.findByIdAndUpdate(id, Object.assign({}, interview));
        return updatedInterview;
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateInterview = updateInterview;
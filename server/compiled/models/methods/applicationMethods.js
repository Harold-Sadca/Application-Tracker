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
exports.updateApplication = exports.getApplication = exports.createApplication = void 0;
const Application_1 = __importDefault(require("../schemas/Application"));
const createApplication = (application) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newApplication = Application_1.default.create(application);
        return newApplication;
    }
    catch (error) {
        console.log(error);
    }
});
exports.createApplication = createApplication;
const getApplication = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const application = Application_1.default.findById(id);
        return application;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getApplication = getApplication;
const updateApplication = (id, application) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedApplication = Application_1.default.findByIdAndUpdate(id, Object.assign({}, application));
        return updatedApplication;
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateApplication = updateApplication;

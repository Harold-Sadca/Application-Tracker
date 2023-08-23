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
const User_1 = __importDefault(require("../schemas/User"));
const createApplication = (application, _id) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const newApplication = new Application_1.default(application);
        const user = yield User_1.default.findById(_id);
        (_a = user === null || user === void 0 ? void 0 : user.applications) === null || _a === void 0 ? void 0 : _a.push(newApplication.id);
        newApplication.applicant = user === null || user === void 0 ? void 0 : user._id;
        yield (user === null || user === void 0 ? void 0 : user.save());
        yield newApplication.save();
        yield newApplication.populate('applicant', 'username');
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

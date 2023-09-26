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
const mongoose_1 = __importDefault(require("mongoose"));
const dataHelper_1 = require("./dataHelper");
const userMethods_1 = require("../models/methods/userMethods");
const applicationMethods_1 = require("../models/methods/applicationMethods");
const interviewMethods_1 = require("../models/methods/interviewMethods");
main().catch((err) => console.log(err));
const interviewType = [
    'Technical Interviews',
    'Behavioral Interviews',
    'System Design Interviews',
    'Whiteboard Interviews',
    'Coding Interviews',
    'Phone Screen Interviews',
    'Pair Programming Interviews',
    'Case Study Interviews',
];
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect('mongodb://127.0.0.1:27017/application-tracker', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const db = mongoose_1.default.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', () => __awaiter(this, void 0, void 0, function* () {
            db.dropDatabase();
            console.log('Database connected. Starting seeding.');
            for (let i = 0; i < dataHelper_1.mockUsers.length; i++) {
                const interview = Math.floor(Math.random() * 8);
                const user = yield (0, userMethods_1.createUser)(dataHelper_1.mockUsers[i]);
                const application1 = yield (0, applicationMethods_1.createApplication)(dataHelper_1.mockApplications[i], user === null || user === void 0 ? void 0 : user._id);
                const application2 = yield (0, applicationMethods_1.createApplication)(dataHelper_1.mockApplications[i + 1], user === null || user === void 0 ? void 0 : user._id);
                const interview1 = yield (0, interviewMethods_1.createInterview)(Object.assign(Object.assign({}, dataHelper_1.mockInterviews[i]), { interviewType: interviewType[interview] }), application1 === null || application1 === void 0 ? void 0 : application1._id);
                const interview2 = yield (0, interviewMethods_1.createInterview)(Object.assign(Object.assign({}, dataHelper_1.mockInterviews[i + 1]), { interviewType: interviewType[interview + 1] }), application2 === null || application2 === void 0 ? void 0 : application2._id);
            }
            console.log('Database seeding complete. Disconnecting');
            yield mongoose_1.default.connection.close();
        }));
    });
}

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const connect_mongodb_session_1 = __importDefault(require("connect-mongodb-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const applicationRouter_1 = __importDefault(require("./routers/applicationRouter"));
const interviewRouter_1 = __importDefault(require("./routers/interviewRouter"));
const userRouter_1 = __importDefault(require("./routers/userRouter"));
const dotenv_1 = __importDefault(require("dotenv"));
const User_1 = __importDefault(require("./models/schemas/User"));
dotenv_1.default.config();
const port = process.env.PORT;
const uri = process.env.DB_URL;
const secret = process.env.SECRET_KEY_WORD;
const app = (0, express_1.default)();
const MongoDBStore = (0, connect_mongodb_session_1.default)(express_session_1.default);
const store = new MongoDBStore({
    uri,
    secret,
    touchAfter: 24 * 60 * 60,
    collection: 'sessions',
});
store.on('error', function (e) {
    console.log('SESSION STORE ERROR', e);
});
app.use((0, cookie_parser_1.default)(secret));
const sessionConfig = {
    store,
    name: 'session',
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        maxAge: 1000 * 60 * 60 * 24 * 7,
    },
    credentials: true,
};
app
    .use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}))
    .use(body_parser_1.default.json())
    .use((0, express_session_1.default)(sessionConfig))
    .use(passport_1.default.initialize())
    .use(passport_1.default.session());
passport_1.default.use(new passport_local_1.Strategy(User_1.default.authenticate()));
passport_1.default.serializeUser((user, callback) => {
    process.nextTick(() => {
        return callback(null, {
            id: user._id,
            username: user.username,
        });
    });
});
passport_1.default.deserializeUser((user, cb) => {
    process.nextTick(() => {
        return cb(null, user);
    });
});
app.use('/application', applicationRouter_1.default);
app.use('/interview', interviewRouter_1.default);
app.use('/user', userRouter_1.default);
app.listen(port, () => {
    console.log(`Running at ${port}`);
});

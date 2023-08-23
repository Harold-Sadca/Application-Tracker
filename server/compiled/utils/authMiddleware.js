"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const authenticate = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    }
    else {
        res.status(400).send(JSON.stringify('Bad Request'));
    }
};
exports.authenticate = authenticate;

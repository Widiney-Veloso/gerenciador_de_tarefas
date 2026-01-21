"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const logger_1 = require("./middlewares/logger");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(logger_1.logger);
app.use(routes_1.default);
exports.default = app;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/health", (req, res) => {
    return res.json({
        status: "ok",
        message: "API is running 🚀"
    });
});
exports.default = router;

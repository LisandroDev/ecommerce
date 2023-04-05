"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path = require('path');
const router = express_1.default.Router();
router.get("/:name", (req, res) => {
    res.sendFile(path.resolve(`./src/public/resources/${req.params['name']}.jpg`));
});
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const images_1 = __importDefault(require("./routes/images"));
const products_1 = __importDefault(require("./routes/products"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const PORT = 3003;
app.use(express_1.default.static('build'));
app.use('/images', images_1.default);
app.use('/products', products_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
module.exports = app;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnect_1 = __importDefault(require("../../config/dbConnect"));
class Product extends sequelize_1.Model {
}
Product.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    category: { allowNull: false, type: sequelize_1.DataTypes.STRING },
    imageUrl: { allowNull: false, type: sequelize_1.DataTypes.STRING },
    price: { allowNull: false, type: sequelize_1.DataTypes.FLOAT },
}, { timestamps: true, sequelize: dbConnect_1.default, underscored: false });
exports.default = Product;

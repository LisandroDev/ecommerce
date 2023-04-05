"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewProduct = void 0;
const types_1 = require("./types");
const toNewProduct = ({ title, price, category, imageUrl, }) => {
    const newEntry = {
        title: parseComment(title),
        price: parsePrice(price),
        category: parseCategory(category),
        imageUrl: parseComment(imageUrl),
    };
    return newEntry;
};
exports.toNewProduct = toNewProduct;
const isString = (text) => {
    return typeof text === "string" || text instanceof String;
};
const isNumber = (input) => {
    return typeof input === "number" || input instanceof Number;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isCategory = (param) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return Object.values(types_1.Category).includes(param);
};
const parseCategory = (category) => {
    if (!category || !isCategory(category)) {
        throw new Error("Incorrect or missing category: " + category);
    }
    return category;
};
const parseComment = (comment) => {
    if (!comment || !isString(comment)) {
        throw new Error("Incorrect or missing comment");
    }
    return comment;
};
const parsePrice = (price) => {
    if (!price || !isNumber(Number(price))) {
        throw new Error("Incorrect or missing price");
    }
    return Number(price);
};

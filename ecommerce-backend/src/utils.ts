import { Category, NewProduct } from "./types";

type ProductFields = {
  title: unknown;
  price: unknown;
  category: unknown;
  imageUrl: unknown;
};

export const toNewProduct = ({
  title,
  price,
  category,
  imageUrl,
}: ProductFields): NewProduct => {
  const newEntry: NewProduct = {
    title: parseComment(title),
    price: parsePrice(price),
    category: parseCategory(category),
    imageUrl: parseComment(imageUrl),
  };
  return newEntry;
};

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const isNumber = (input: unknown): input is number => {
  return typeof input === "number" || input instanceof Number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isCategory = (param: any): param is Category => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.values(Category).includes(param);
};

const parseCategory = (category: unknown): Category => {
  if (!category || !isCategory(category)) {
    throw new Error("Incorrect or missing category: " + category);
  }
  return category;
};

const parseComment = (comment: unknown): string => {
  if (!comment || !isString(comment)) {
    throw new Error("Incorrect or missing comment");
  }
  return comment;
};

const parsePrice = (price: unknown): number => {
  if (!price || !isNumber(Number(price))) {
    throw new Error("Incorrect or missing price");
  }
  return Number(price);
};

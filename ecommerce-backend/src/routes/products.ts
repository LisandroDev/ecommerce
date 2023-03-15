import express from 'express';
import ProductController from "../controllers/Product.controller"
const router = express.Router();

router.get('/', ProductController.GetAllProducts)

export default router
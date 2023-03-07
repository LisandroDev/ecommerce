import express from 'express';
import products  from '../data/products'

const router = express.Router();

router.get('/', (_req, res) => {
    res.json(products)
})

export default router
import { Request, Response } from 'express';
import Product from '../database/models/Product';

const GetAllProducts = async (_req: Request, res: Response): Promise<Response> => {
    try{
        const products = await Product.findAll({});
        return res.status(200).json(products)
    } catch (error: any) {
        if(error != null && error instanceof Error) {
            return res.status(500).send({
                status: 500,
                message: error.message,
                errors: error
            })
        }
        return res.status(500).send({
            status: 500,
            message: "Internal server error",
            errors: error
        })
    }
}

export default { GetAllProducts }
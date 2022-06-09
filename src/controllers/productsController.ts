import { Request, Response } from 'express';
import productsService from '../services/productService';

import { Product } from '../interfaces';

const getAllProducts = async (_req: Request, res: Response<Product[]>) => {
  const products = await productsService.getAllProducts();
  res.json(products);
};

export default {
  getAllProducts,
};
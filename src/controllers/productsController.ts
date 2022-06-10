import { Request, Response } from 'express';
import productsService from '../services/productService';

import { Product } from '../interfaces';

const getAllProducts = async (_req: Request, res: Response<Product[]>) => {
  const products = await productsService.getAllProducts();
  res.json(products);
};

const createAllProducts = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const products = await productsService.createAllProducts(name, amount);
  res.status(201).json(products);
};

export default {
  getAllProducts,
  createAllProducts,
};
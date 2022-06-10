import { Product } from '../interfaces';
import productsModel from '../models/productsModel';

const getAllProducts = async (): Promise<Product[]> => {
  const products = await productsModel.getAllProducts();
  return products;
};

const createAllProducts = async (name: string, amount: string): Promise<Product> => {
  const products = await productsModel.createAllProducts(name, amount);
  return products;
};

export default {
  getAllProducts,
  createAllProducts,
};
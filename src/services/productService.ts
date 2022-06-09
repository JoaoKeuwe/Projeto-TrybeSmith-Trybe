import { Product } from '../interfaces';
import productsModel from '../models/productsModel';

const getAllProducts = async (): Promise<Product[]> => {
  const products = await productsModel.getAllProducts();
  return products;
};

export default {
  getAllProducts,
};
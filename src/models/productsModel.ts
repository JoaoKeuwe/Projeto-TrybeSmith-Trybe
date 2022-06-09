import connection from './connection';

import { Product } from '../interfaces';

async function getAllProducts(): Promise<Product[]> {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.Products;');
  return products as Product[];
}

export default {
  getAllProducts,
};
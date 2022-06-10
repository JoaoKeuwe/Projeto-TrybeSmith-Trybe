import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';

import { Product } from '../interfaces';

async function getAllProducts(): Promise<Product[]> {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.Products;');
  return products as Product[];
}

async function createAllProducts(name: string, amount: string): Promise<Product> {
  const create = await connection.execute<ResultSetHeader>(`INSERT INTO 
  Trybesmith.Products (name, amount) VALUES(?, ?)`, [name, amount]);
  const [rows] = create;
  const { insertId } = rows;
  return {
    id: insertId,
    name,
    amount,
  };
}

export default {
  getAllProducts,
  createAllProducts,
};
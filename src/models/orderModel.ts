import { RowDataPacket } from 'mysql2';
import connection from './connection';
// import Orders from '../interfaces/orderInterface';

async function listAll() {
  const order = await connection.execute<RowDataPacket[]>(`
  SELECT ord.id, userId, prod.id AS productsIds 
  FROM Trybesmith.Orders AS ord
  INNER JOIN Trybesmith.Products
  AS prod ON ord.id = prod.orderId`);
  const [orders] = order;
  const rename = orders.map((ord) => ({
    id: ord.id,
    userId: ord.userId,
    productsIds: [ord.productsIds],
  }));
  return rename;
}
export default { listAll };
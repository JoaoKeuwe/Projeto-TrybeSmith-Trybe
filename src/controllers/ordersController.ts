import { Request, Response } from 'express';
import orderService from '../services/orderService';

const listAll = async (_req: Request, res: Response) => {
  const order = await orderService.listAll();
  res.status(200).json(order);
};

export default { listAll };
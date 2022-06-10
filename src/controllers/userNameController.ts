import { Request, Response } from 'express';
import userNameService from '../services/UserNameServices';

const getUsers = async (req: Request, res: Response) => {
  const products = await userNameService.getUsers(req.body);
  res.status(201).json(products);
};

export default {
  getUsers,
};
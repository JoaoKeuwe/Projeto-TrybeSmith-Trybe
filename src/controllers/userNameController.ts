import { Request, Response } from 'express';
import userNameService from '../services/UserNameServices';

const getUsers = async (req: Request, res: Response) => {
  const token = await userNameService.getUsers(req.body);
  res.status(201).json({ token });
};

export default {
  getUsers,
};
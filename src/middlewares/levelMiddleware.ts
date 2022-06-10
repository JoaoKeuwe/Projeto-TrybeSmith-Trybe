import { NextFunction, Request, Response } from 'express';

const levelNameMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  if (level === undefined) {
    return res
      .status(400).json({ message: '"level" is required' });
  }
  if (typeof level !== 'number') {
    return res
      .status(422).json({ message: '"level" must be a number' });
  }
  if (level <= 0) {
    return res
      .status(422).json({ message: '"level" must be greater than or equal to 1' });
  }
  next();
};
export default levelNameMiddleware;
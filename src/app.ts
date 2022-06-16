import express from 'express';
import productsController from './controllers/productsController';
import ordersController from './controllers/ordersController';
import validMiddlewareName, { validMiddlewareAmount } from './middlewares/createProductsMiddleware';
import levelMiddleware from './middlewares/levelMiddleware';
import passwordMiddleware from './middlewares/passwordMiddleware';
import userNameMiddleware from './middlewares/userNameMiddlewares';
import classeMiddleware from './middlewares/classeMiddlewares';
import userNameController from './controllers/userNameController';

const app = express();

app.use(express.json());

app.get('/products', productsController.getAllProducts);
app.post(
  '/products',
  validMiddlewareName,
  validMiddlewareAmount,
  productsController.createAllProducts,
);

app.post(
  '/users',
  userNameMiddleware,
  classeMiddleware,
  levelMiddleware,
  passwordMiddleware,

  userNameController.getUsers,
);

app.get('/orders', ordersController.listAll);

export default app;
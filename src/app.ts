import express from 'express';
import productsController from './controllers/productsController';
import validMiddlewareName, { validMiddlewareAmount } from './middlewares/createProductsMiddleware';

const app = express();

app.use(express.json());

app.get('/products', productsController.getAllProducts);
app.post(
  '/products',
  validMiddlewareName,
  validMiddlewareAmount,

  productsController.createAllProducts,
);

export default app;
import orderModel from '../models/orderModel';

const listAll = async () => {
  const order = await orderModel.listAll();
  return order;
};

export default { listAll };

import userNameModel from '../models/userNameModel';
import token from '../middlewares/generateJWT';
import User from '../interfaces/userInterface';

const getUsers = async (newUser: User) => {
  await userNameModel.getUsers(newUser);
  return { token };
};
export default { getUsers };
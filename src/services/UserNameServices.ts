import userNameModel from '../models/userNameModel';
import token from '../middlewares/generateJWT';
import User from '../interfaces/userInterface';

const getUsers = async (newUser: User) => {
  const id = await userNameModel.getUsers(newUser);
  const jwt = token({ username: newUser.username, id });
  return jwt;
};
export default { getUsers };
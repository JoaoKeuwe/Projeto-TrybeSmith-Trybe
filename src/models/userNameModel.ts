import User from '../interfaces/userInterface';
import connection from './connection';

async function getUsers(user: User) {
  const { username, classe, level, password } = user;
  const users = await connection.execute(
    `INSERT INTO
   Trybesmith.Users (username, classe, password, level) VALUES (?, ?, ?, ?)`,
    [username, classe, password, level],
  );
  return users;
}

export default { getUsers };
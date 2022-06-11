import { ResultSetHeader } from 'mysql2';
import User from '../interfaces/userInterface';
import connection from './connection';

async function getUsers(user: User) {
  const { username, classe, level, password } = user;
  const users = await connection.execute<ResultSetHeader>(
    `INSERT INTO
   Trybesmith.Users (username, classe, password, level) VALUES (?, ?, ?, ?)`,
    [username, classe, password, level],
  );
  const [rows] = users;
  const { insertId } = rows;
  return insertId;
}

export default { getUsers };
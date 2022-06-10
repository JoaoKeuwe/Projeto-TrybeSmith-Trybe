import jwt from 'jsonwebtoken';

const generateJWT = (payload:{ username: string, id: number }) => {
  const token = jwt.sign({
    data: payload,
  }, 'joaov2013', { algorithm: 'HS256' });
  return token;
};

export default generateJWT;
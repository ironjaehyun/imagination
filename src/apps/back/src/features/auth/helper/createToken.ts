import jwt from 'jsonwebtoken';

export const createAccessToken = (_id, id) => {
  const jwtkey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign({ _id, id }, jwtkey, {
    expiresIn: '1d',
    issuer: 'leechi',
  });

  return token;
};

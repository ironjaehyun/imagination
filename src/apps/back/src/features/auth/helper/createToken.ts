import jwt from 'jsonwebtoken';

export const createAccessToken = (_id, id, name) => {
  const jwtkey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign({ _id, id, name }, jwtkey, {
    expiresIn: '1d',
    issuer: 'leechi',
  });

  return token;
};

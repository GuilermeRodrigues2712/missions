import jwt from 'jsonwebtoken';

const secretKey = 'your_secret_key';

export const generateToken = (userId: number): string => {
  return jwt.sign({ id: userId }, secretKey, { expiresIn: '1h' });
};

export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    throw new Error('Invalid token');
  }
};

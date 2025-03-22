import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface JwtPayload {
  _id: unknown;
  username: string;
  email: string;
}

const secretKey = process.env.JWT_SECRET_KEY || '';

export const signToken = (username: string, email: string, _id: unknown) => {
  const payload = { username, email, _id };
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

export const authMiddleware = ({ req }: { req: any }) => {
  // Token is usually in the Authorization header as: Bearer <token>
  let token = req.headers.authorization || '';

  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }

  if (!token) {
    return { user: null };
  }

  try {
    const decoded = jwt.verify(token, secretKey) as JwtPayload;
    return { user: decoded };
  } catch (err) {
    console.warn('Invalid token');
    return { user: null };
  }
};

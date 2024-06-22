// src/common/middleware/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../auth/domain/models/user';
import { env } from './env';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Se requiere token de acceso' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Se requiere token de acceso' });
  }

  try {
    const decoded = jwt.verify(token, env.jwtSecret) as jwt.JwtPayload;
    const user = await User.findByPk(decoded.id);

    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token invalido' });
  }
};

export default authMiddleware;

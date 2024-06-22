import { Request, Response } from 'express';
import AuthService from '../../application/authService';
import UserRepository from '../../domain/repositories/userRespository';

const userRepository = new UserRepository();
const authService = new AuthService(userRepository);

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const token = await authService.login(email, password);
    res.json({ token });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};

import { Request, Response } from "express";
import UserService from "../../application/userService";
import UserRepository from "../../domain/repositories/userRespository";

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

export const getAllUsers = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const pageSize = parseInt(req.query.pageSize as string) || 10;

  try {
    const users = await userService.getAllUsers(page, pageSize);
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

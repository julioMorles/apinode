import UserRepository from "../domain/repositories/userRespository";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { env } from "../../common/env";

export default class AuthService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async login(email: string, password: string): Promise<string | null> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error("Correo o contraseña invalida");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Correo o contraseña");
    }

    const token = jwt.sign({ id: user.id }, env.jwtSecret, { expiresIn: "1h" });
    return token;
  }
}

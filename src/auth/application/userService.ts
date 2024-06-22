import User from "../domain/models/user";
import UserRepository from "../domain/repositories/userRespository";

export default class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getAllUsers(
    page: number,
    pageSize: number
  ): Promise<{ rows: User[]; count: number }> {
    return await this.userRepository.findAll(page, pageSize);
  }
}

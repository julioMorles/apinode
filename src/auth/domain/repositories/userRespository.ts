import Product from "../../../products/domain/models/product";
import User from "../models/user";

export default class UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    return await User.findOne({ where: { email } });
  }

  async findAll(
    page: number,
    pageSize: number
  ): Promise<{ rows: User[]; count: number }> {
    const offset = (page - 1) * pageSize;

    const { rows, count } = await User.findAndCountAll({
      limit: pageSize,
      offset,
      include: [Product],
    });

    return { rows, count };
  }
}

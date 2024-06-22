import Favorite from "../../../products/domain/models/favorite";
import Product from "../../../products/domain/models/product";

export default class FavoriteRepository {
  async addFavorite(userId: number, productId: number): Promise<void> {
    await Favorite.create({ userId, productId });
  }

  async getFavorites(
    userId: number,
    page: number,
    pageSize: number
  ): Promise<{ rows: Product[]; count: number }> {
    const offset = (page - 1) * pageSize;

    const { rows, count } = await Favorite.findAndCountAll({
      where: { userId },
      include: [{ model: Product }],
      limit: pageSize,
      offset,
    });

    const validProducts = rows
      .map((favorite) => favorite.product)
      .filter((product) => !!product) as Product[];

    return { rows: validProducts, count };
  }
}

import FavoriteRepository from "../domain/repositories/favoriteRepository";
import Product from "../domain/models/product";
import Favorite from "../domain/models/favorite";

export default class FavoriteService {
  private favoriteRepository: FavoriteRepository;

  constructor(favoriteRepository: FavoriteRepository) {
    this.favoriteRepository = favoriteRepository;
  }

  async addFavorite(userId: number, productId: number): Promise<void> {
    await this.favoriteRepository.addFavorite(userId, productId);
  }

  async getFavorites(
    userId: number,
    page: number,
    pageSize: number
  ): Promise<{ rows: Product[]; count: number }> {
    return await this.favoriteRepository.getFavorites(userId, page, pageSize);
  }
}

import { Request, Response } from 'express';
import FavoriteService from '../../application/favoriteService';
import FavoriteRepository from '../../domain/repositories/favoriteRepository';

const favoriteRepository = new FavoriteRepository();
const favoriteService = new FavoriteService(favoriteRepository);

export const addFavorite = async (req: Request, res: Response) => {
  const { userId, productId } = req.body;

  try {
    await favoriteService.addFavorite(userId, productId);
    res.status(201).json({ message: 'Se añadio a favoritos' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getFavorites = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const page = parseInt(req.query.page as string) || 1;
  const pageSize = parseInt(req.query.pageSize as string) || 10;

  try {
    const favorites = await favoriteService.getFavorites(parseInt(userId), page, pageSize);
    res.json(favorites);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

import { Router } from "express";
import {
  addFavorite,
  getFavorites,
} from "../../interface/controllers/favoriteController";
import authMiddleware from "../../../common/authMiddleware";

const router = Router();

router.post("/", authMiddleware, addFavorite);
router.get("/:userId", authMiddleware, getFavorites);

export default router;

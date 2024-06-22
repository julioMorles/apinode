import { Router } from "express";
import { getAllUsers } from "../../interfaces/controlles/userController";
import authMiddleware from "../../../common/authMiddleware";

const router = Router();

router.get("/", authMiddleware, getAllUsers);

export default router;

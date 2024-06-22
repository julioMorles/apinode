import { Router } from 'express';
import { login } from '../../interfaces/controlles/authController';

const router = Router();

router.post('/login', login);

export default router;
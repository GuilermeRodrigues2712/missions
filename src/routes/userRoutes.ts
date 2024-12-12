import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/UserController';

const router = Router();

router.post('/usuarios/registro', registerUser);
router.post('/usuarios/login', loginUser);

export default router;

import { Router } from 'express';
import { AuthController } from '../auth/auth.controller';

const router: Router = Router();
const authController = new AuthController();

// POST /api/auth/check-email
router.post('/check-email', authController.checkEmail);

export default router;

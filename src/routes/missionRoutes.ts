import { Router } from 'express';
import { getMissions, createMission, deleteMission } from '../controllers/MissionController';
import { verifyToken } from '../services/authService';

const router = Router();

router.get('/missoes', getMissions);
router.post('/missoes', verifyToken, createMission);
router.delete('/missoes/:id', verifyToken, deleteMission);

export default router;

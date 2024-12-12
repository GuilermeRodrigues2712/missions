import { Request, Response } from 'express';
import Mission from '../models/Mission';

export const getMissions = async (req: Request, res: Response): Promise<void> => {
  const missions = await Mission.findAll();
  res.json(missions);
};

export const createMission = async (req: Request, res: Response): Promise<void> => {
  const newMission = await Mission.create(req.body);
  res.status(201).json(newMission);
};

export const deleteMission = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  await Mission.destroy({ where: { id } });
  res.status(204).send();
};

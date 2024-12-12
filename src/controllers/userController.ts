import { Request, Response } from 'express';
import User from '../models/User';
import { generateToken } from '../services/authService';

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  const newUser = await User.create(req.body);
  res.status(201).json(newUser);
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (user && User.validatePassword(password, user.password)) {
    const token = generateToken(user.id);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

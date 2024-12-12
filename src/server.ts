import express from 'express';
import missionRoutes from './routes/missionRoutes';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(express.json());
app.use(missionRoutes);
app.use(userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

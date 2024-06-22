import express from 'express';
import authRoutes from './auth/infrastructure/routes/authRoutes';
import userRoutes from './auth/infrastructure/routes/userRoutes';
import favoriteRoutes from './products/infrastructure/routes/favoriteRoutes';
import { env } from './common/env';
import initializeDatabase from './common/initialize';

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/favorites', favoriteRoutes);

const startServer = async () => {
  try {
    await initializeDatabase();
    
    app.listen(env.port, () => {
      console.log(`Server corriendo en puerto ${env.port}`);
    });
  } catch (error) {
    console.error('error al iniciar el server server:', error);
    process.exit(1); 
  }
};

startServer();
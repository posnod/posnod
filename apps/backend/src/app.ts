import express, { Express, Request, Response } from 'express';
import authRouter from './router/auth.route';

const app: Express = express();

// Middleware
app.use(express.json());

// API Routes
app.use('/api/auth', authRouter);

// Health check / Root
app.get('/', (req: Request, res: Response) => {
  res.json({
    name: 'Posnod Backend API',
    status: 'online',
    version: '1.0.0',
  });
});

export default app;

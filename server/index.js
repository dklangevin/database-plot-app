import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import dataRoutes from './route/data.js';

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use(dataRoutes);

app.listen(5000, () => {
  console.log('Server is started and listening on port 5000');
});

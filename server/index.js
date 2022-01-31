import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import dataRoutes from './route/data.js';

import pool from './database.js';

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use(dataRoutes);

const getData = async (req, res) => {
  try {
    const query = 'SELECT * FROM sample_table WHERE id>50';
    const { rows } = await pool.query(query);
    res.json(rows);
  } catch (err) {
    console.error(err);
  }
};

app.get('/datatest', getData);

app.listen(5000, () => {
  console.log('Server is started and listening on port 5000');
});

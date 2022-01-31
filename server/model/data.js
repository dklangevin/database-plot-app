import pool from '../database.js';

export const getData = async () => {
  const query = 'SELECT * FROM sample_table WHERE id<20';
  const { rows } = await pool.query(query);
  return rows;
};

export const getData1 = async () => {
  const query = 'SELECT * FROM sample_table WHERE id>20 AND id<40';
  const { rows } = await pool.query(query);
  return rows;
};

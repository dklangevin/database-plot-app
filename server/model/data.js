import pool from '../database.js';

export const getData = async () => {
  const query = 'SELECT * FROM sample_table';
  const { rows } = await pool.query(query);
  return rows;
};

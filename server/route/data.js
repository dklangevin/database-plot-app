import express from 'express';

import { getData } from '../controller/data.js';

const router = express.Router();

router.get('/api/data', getData);

export default router;

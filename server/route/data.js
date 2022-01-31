import express from 'express';

import { getData, getData1 } from '../controller/data.js';

const router = express.Router();

router.get('/api/data', getData);
router.get('/api/data1', getData1);

export default router;

// Module Imports
import express from 'express';
// Config Imports
import { VERSION_NUMBER } from '../../config/app/version.config';

const router = express.Router();

/* GET api status. */
router.get('/', (req, res) => {
  return res.send(
    `API => [${process.env.API_NAME} ${VERSION_NUMBER}] ENV => (${process.env.NODE_ENV}) STATUS => OK`,
  );
});

export default router;

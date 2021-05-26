// Module Imports
import express from 'express';
import { StatusCodes } from 'http-status-codes';
import getDecimalNumbers from '../../../services/calculations';
// Logger Utils
import makeLogger from '../../../utils/logger.utils';

const router = express.Router();

/*
  GET
*/

// get decimals from param number
router.get('/:number', async (req, res) => {
  const { uuid, url } = req;
  const Logger = makeLogger({ uuid, url });
  try {
    const { number } = req.params;
    const { error, data } = await getDecimalNumbers({
      number: parseInt(number, 10),
      Logger,
    });
    Logger.response({ code: StatusCodes.OK });
    return res.status(StatusCodes.OK).send({ error, data });
  } catch (err) {
    Logger.error({ err });
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ error: true, data: err });
  }
});

export default router;

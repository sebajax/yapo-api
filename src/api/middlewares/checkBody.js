import { StatusCodes, ReasonPhrases } from 'http-status-codes';
// Logger Utils
import makeLogger from '../../utils/logger.utils';

export default (req, res, next) => {
  if (Object.keys(req.body).length > 0) {
    return next();
  }
  const { uuid, url } = req;
  const Logger = makeLogger({ uuid, url });
  Logger.response({
    code: StatusCodes.BAD_REQUEST,
    data: ReasonPhrases.BAD_REQUEST,
  });
  return res
    .status(StatusCodes.BAD_REQUEST)
    .send({ error: true, data: ReasonPhrases.BAD_REQUEST });
};

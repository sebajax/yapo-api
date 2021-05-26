// Import axios to communicate with auth-api
import axios from 'axios';
// Import http status codes
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
// Logger Utils
import makeLogger from '../../utils/logger.utils';

export default async (req, res, next) => {
  const { uuid, url } = req;
  const Logger = makeLogger({ uuid, url });

  if (!req.headers.authorization) {
    Logger.unAuthorized({});
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send({ error: true, data: ReasonPhrases.UNAUTHORIZED });
  }
  const { authorization } = req.headers;
  try {
    const response = await axios.get(process.env.AUTH_API_URL, {
      headers: {
        Authorization: authorization,
      },
    });
    const { error, data, auth } = response.data;
    if (error === false && data && auth === true) {
      res.locals.idClouderPickup = data.username; // clouder pickup data
      return next();
    }
    Logger.unAuthorized({});
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send({ error: true, data: ReasonPhrases.UNAUTHORIZED });
  } catch (err) {
    Logger.unAuthorized({ err });
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send({ error: true, data: ReasonPhrases.UNAUTHORIZED });
  }
};

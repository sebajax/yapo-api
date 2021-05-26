// Import axios to communicate with auth-api
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
// Logger Import
import logger from '../../config/log/logger';

export default async (req, res, next) => {
  req.uuid = uuidv4();
  try {
    const { authorization } = req.headers;
    const info = await axios.get(process.env.AUTH_API_URL_INFO, {
      headers: {
        Authorization: authorization,
      },
    });
    logger.info(`${req.url} REQUEST`, {
      uuid: req.uuid,
      type: 'request',
      url: req.url,
      username: info.data.username,
      usertype: info.data.type,
      httpRequest: {
        requestUrl: req.url,
        requestBody: req.body,
        requestMethod: req.method,
        remoteIp: req.connection.remoteAddress,
      },
    });
  } catch (error) {
    logger.warn(`${req.url} REQUEST`, {
      uuid: req.uuid,
      type: 'request',
      httpHeader: {
        auth: req.headers.authorization,
      },
      httpRequest: {
        requestUuid: req.uuid,
        requestUrl: req.url,
        requestBody: req.body,
        requestMethod: req.method,
        remoteIp: req.connection.remoteAddress,
      },
    });
  }

  return next();
};

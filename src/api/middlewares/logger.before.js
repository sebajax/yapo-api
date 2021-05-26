import { v4 as uuidv4 } from 'uuid';
// Logger Import
import logger from '../../config/log/logger';

export default async (req, res, next) => {
  req.uuid = uuidv4();
  try {
    logger.info(`${req.url} REQUEST`, {
      uuid: req.uuid,
      type: 'request',
      url: req.url,
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

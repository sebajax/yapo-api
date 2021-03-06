// Import http status codes
import { StatusCodes, getReasonPhrase } from 'http-status-codes';
// Import logger
import logger from '../config/log/logger';

export default function makeLogger({ uuid, url }) {
  return {
    response: ({ code, data = null }) => {
      const message = data || undefined;
      switch (code) {
        case StatusCodes.OK:
          logger.info(`${url} RESPONSE`, {
            uuid,
            type: 'response',
            url,
            httpResponse: {
              code,
              message,
              status: getReasonPhrase(code),
            },
          });
          break;
        default:
          logger.warn(`${url} RESPONSE`, {
            uuid,
            type: 'response',
            url,
            httpResponse: {
              code,
              message,
              status: getReasonPhrase(code),
            },
          });
          break;
      }
    },
    error: ({ err }) => {
      logger.error(`${url} USE_CASE`, {
        uuid,
        type: 'use_case',
        url,
        err: {
          name: err.name,
          message: err.message,
          stack: JSON.stringify(err.stack),
        },
      });
    },
    info: ({ logInfo }) => {
      logger.info(`${url} TRANSACTION_INFO`, {
        uuid,
        type: 'transaction_info',
        url,
        log_info: JSON.stringify(logInfo),
      });
    },
  };
}

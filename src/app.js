// Module Imports
import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import routes from './api/routes/routes';
import logger from './config/log/logger';
import loggerBefore from './api/middlewares/logger.before';

const app = express();
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Logger Before middleware
app.use(loggerBefore);
// Load - App Routes
routes(app);

app.listen(process.env.PORT, () => {
  logger.info(`APP running on PORT - ${process.env.PORT}`);
});

export default app;

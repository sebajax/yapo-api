// Require App routes
import indexRoutes from './index.routes';
import calculationsRoutes from './calculations/calculations.routes';

// Middlewares
// import checkToken from '../middlewares/checkToken';

export default (app) => {
  app.use('/', indexRoutes);
  // From this point check if valid token
  // app.use(checkToken);
  app.use('/calculations', calculationsRoutes);
};

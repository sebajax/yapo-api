// Require App routes
import indexRoutes from './index.routes';
import calculationsRoutes from './calculations/calculations.routes';

export default (app) => {
  app.use('/', indexRoutes);
  app.use('/calculations', calculationsRoutes);
};

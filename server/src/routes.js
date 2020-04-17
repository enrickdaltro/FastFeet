import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import SessionDeliverymanController from './app/controllers/SessionDeliverymanController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import DeliverymanController from './app/controllers/DeliverymanController';
import DeliveryController from './app/controllers/DeliveryController';
import DeliveryShowController from './app/controllers/DeliveryShowController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';
import ShowController from './app/controllers/ShowController';
import StatusController from './app/controllers/StatusController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/files', upload.single('file'), FileController.store);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/sessiondeliveryman', SessionDeliverymanController.store);

routes.get('/delivery/:deliverymanId', ShowController.index);
// routes.get('/deliveryman/:id/deliveries', ShowController.index);
routes.put(
  '/deliveryman/:deliveryman_id/status/:delivery_id',
  StatusController.update,
);

routes.get('delivery/:deliveryId', DeliveryShowController.show);

routes.get('/deliveryman', DeliverymanController.index);
routes.get('/deliveryman/:deliverymanId', DeliverymanController.show);
routes.post('/deliveryman', DeliverymanController.store);
routes.put('/deliveryman/:deliverymanId', DeliverymanController.update);
routes.delete('/deliveryman/:deliverymanId', DeliverymanController.delete);

routes.get('/problems', DeliveryProblemController.index);
routes.get('/problems/deliverys/:deliveryId/', DeliveryProblemController.show);
routes.post('/delivery/problems/:deliveryId', DeliveryProblemController.store);
routes.delete('/problems/:problemId', DeliveryProblemController.delete);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/recipients', RecipientController.index);
routes.get('/recipients/:recipientId', RecipientController.show);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:recipientId', RecipientController.update);
routes.delete('/recipients/:recipientId', RecipientController.delete);

routes.get('/delivery', DeliveryController.index);
routes.get('/delivery/:deliveryId', DeliveryController.show);
routes.post('/delivery', DeliveryController.store);
routes.put('/delivery/:deliveryId', DeliveryController.update);
routes.delete('/delivery/:deliveryId', DeliveryController.delete);

export default routes;

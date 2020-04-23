import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import DeliverymanController from './app/controllers/DeliverymanController';
import OrderController from './app/controllers/OrderController';
import DeliveryAvailableController from './app/controllers/DeliveryAvailableController';
import DeliveriesController from './app/controllers/DeliveriesController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get(
  '/deliverymans/:deliverymanId/deliveries',
  DeliveriesController.index
);
routes.get(
  '/deliverymans/:deliverymanId/orders',
  DeliveryAvailableController.index
);
routes.put(
  '/deliverymans/:deliverymanId/pickups/:orderId',
  DeliveryAvailableController.updatePickUp
);
routes.put(
  '/deliverymans/:deliverymanId/deliveries/:orderId',
  upload.single('file'),
  DeliveryAvailableController.updateDelivered
);

routes.post(
  '/deliverymans/:deliverymanId/orders/:orderId/problems',
  DeliveryProblemController.store
);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/recipients', RecipientController.index);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:recipientId', RecipientController.update);
routes.delete('/recipients/:recipientId', RecipientController.delete);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/deliverymans', DeliverymanController.index);
routes.post('/deliverymans', DeliverymanController.store);
routes.put('/deliverymans/:deliverymanId', DeliverymanController.update);
routes.delete('/deliverymans/:deliverymanId', DeliverymanController.delete);

routes.get('/orders', OrderController.index);
routes.get('/orders/:orderId', OrderController.indexID);
routes.post('/orders', OrderController.store);
routes.put('/orders/:orderId', OrderController.update);
routes.delete('/orders/:orderId', OrderController.delete);

routes.get('/problems', DeliveryProblemController.index);
routes.get('/orders/:orderId/problems', DeliveryProblemController.indexOrder);
routes.delete(
  '/problems/:problemId/cancel-delivery',
  DeliveryProblemController.delete
);

export default routes;

import { Router } from 'express';

const clientsRouter = Router();

clientsRouter.get('/', (request, response) => {
  return response.send('hello');
});

export default clientsRouter;

import { Router } from 'express';
import Client from '../models/client';

const clientsRouter = Router();

const clientsList: Client[] = [];

clientsRouter.get('/', (request, response) => {
  return response.json(clientsList);
});

clientsRouter.post('/', (request, response) => {
  const { name, birth, cpf, phone, email, address, obs, date } = request.body;

  const client = new Client(name, birth, cpf, phone, email, address, obs, date);

  clientsList.push(client);

  return response.json(client);
});

export default clientsRouter;

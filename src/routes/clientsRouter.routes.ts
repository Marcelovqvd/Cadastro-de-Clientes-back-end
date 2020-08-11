import { Router } from 'express';

import ClientsRepository from '../repositories/ClientsRepository';
import CreateClientService from '../services/CreateClientService';

const clientsRouter = Router();
const clientsRepository = new ClientsRepository();

clientsRouter.get('/', (request, response) => {
  const clients = clientsRepository.all();

  return response.json(clients);
});

clientsRouter.post('/', (request, response) => {
  try {
    const { name, birth, cpf, phone, email, address, obs, date } = request.body;

    const createClient = new CreateClientService(clientsRepository);

    const client = createClient.execute({
      name,
      birth,
      cpf,
      phone,
      email,
      address,
      obs,
      date,
    });

    return response.json(client);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default clientsRouter;

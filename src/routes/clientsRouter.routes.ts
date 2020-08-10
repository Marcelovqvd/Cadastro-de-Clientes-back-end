import { Router } from 'express';

import ClientsRepository from '../repositories/ClientsRepository';

const clientsRouter = Router();
const clientsRepository = new ClientsRepository();

clientsRouter.post('/', (request, response) => {
  const { name, birth, cpf, phone, email, address, obs, date } = request.body;

  const client = clientsRepository.create(
    name,
    birth,
    cpf,
    phone,
    email,
    address,
    obs,
    date,
  );

  return response.json(client);
});

export default clientsRouter;

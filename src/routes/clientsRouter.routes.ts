import { Router } from 'express';
import { uuid } from 'uuidv4';

const clientsRouter = Router();

interface Client {
  id: string;
  name: string;
  birth: string;
  cpf: number;
  phone: number;
  email: string;
  address: string;
  obs: string;
  date: Date;
}

const clientsList: Client[] = [];

clientsRouter.get('/', (request, response) => {
  return response.json(clientsList);
});

clientsRouter.post('/', (request, response) => {
  const { name, birth, cpf, phone, email, address, obs, date } = request.body;

  const client = {
    id: uuid(),
    name,
    birth,
    cpf,
    phone,
    email,
    address,
    obs,
    date,
  };

  clientsList.push(client);

  return response.json(client);
});

export default clientsRouter;

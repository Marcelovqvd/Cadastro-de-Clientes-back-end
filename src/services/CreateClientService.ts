import Client from '../models/client';
import ClientsRepository from '../repositories/ClientsRepository';

interface RequestDTO {
  name: string;
  birth: string;
  cpf: number;
  phone: number;
  email: string;
  address: string;
  obs: string;
  date: Date;
}

class CreateClientService {
  private clientsRepository: ClientsRepository;

  constructor(clientsRepository: ClientsRepository) {
    this.clientsRepository = clientsRepository;
  }

  public execute({
    name,
    birth,
    cpf,
    phone,
    email,
    address,
    obs,
    date,
  }: RequestDTO): Client {
    const client = this.clientsRepository.create({
      name,
      birth,
      cpf,
      phone,
      email,
      address,
      obs,
      date,
    });

    return client;
  }
}

export default CreateClientService;

import Client from '../models/client';

interface CreateClientDTO {
  name: string;
  birth: string;
  cpf: number;
  phone: number;
  email: string;
  address: string;
  obs: string;
  date: Date;
}

class ClientsRepository {
  private clientsList: Client[];

  constructor() {
    this.clientsList = [];
  }

  public all(): Client[] {
    return this.clientsList;
  }

  public create({
    name,
    birth,
    cpf,
    phone,
    email,
    address,
    obs,
    date,
  }: CreateClientDTO): Client {
    const client = new Client({
      name,
      birth,
      cpf,
      phone,
      email,
      address,
      obs,
      date,
    });

    this.clientsList.push(client);

    return client;
  }
}

export default ClientsRepository;

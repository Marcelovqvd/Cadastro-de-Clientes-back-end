import Client from '../models/client';

class ClientsRepository {
  private clientsList: Client[];

  constructor() {
    this.clientsList = [];
  }

  public create(
    name: string,
    birth: string,
    cpf: number,
    phone: number,
    email: string,
    address: string,
    obs: string,
    date: Date,
  ): Client {
    const client = new Client(
      name,
      birth,
      cpf,
      phone,
      email,
      address,
      obs,
      date,
    );

    this.clientsList.push(client);

    return client;
  }
}

export default ClientsRepository;

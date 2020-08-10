import { uuid } from 'uuidv4';

class Client {
  id: string;

  name: string;

  birth: string;

  cpf: number;

  phone: number;

  email: string;

  address: string;

  obs: string;

  date: Date;

  constructor(
    name: string,
    birth: string,
    cpf: number,
    phone: number,
    email: string,
    address: string,
    obs: string,
    date: Date,
  ) {
    this.id = uuid();
    this.name = name;
    this.birth = birth;
    this.cpf = cpf;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.obs = obs;
    this.date = date;
  }
}

export default Client;

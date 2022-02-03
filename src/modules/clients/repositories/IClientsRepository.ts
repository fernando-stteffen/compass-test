import { Client } from "../entities/Clients";

interface IClientDTO {
  name: string;
  sex: string;
  birthDate: Date;
  city: string;
  state: string;
  age: number;
}

interface IClientsRepository {
  findByName(name: string): Promise<Client[]>;
  findById(id: string): Promise<Client>;
  create({ name, sex, birthDate, city, state, age }: IClientDTO);
  delete(id: string): Promise<void>;
  alterName(id: string, name: string): Promise<void>;
  list(name: string): Promise<Client[]>;
}

export { IClientsRepository, IClientDTO };

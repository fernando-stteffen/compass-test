/*
[] Consultar cliente pelo nome
[] Consultar cliente pelo Id
[] Remover cliente
[] Alterar o nome do cliente
*/

import { Client } from "../entities/Clients";

interface IClientDTO {
  name: string;
  sex: string;
  birthDate: Date;
  city: string;
}

interface IClientsRepository {
  findByName(name: string): Promise<Client>;
  findById(id: string): Promise<Client>;
  create({ name, sex, birthDate, city }: IClientDTO);
  delete(id: string): Promise<void>;
  alterName(id: string, name: string): Promise<void>;
}

export { IClientsRepository };

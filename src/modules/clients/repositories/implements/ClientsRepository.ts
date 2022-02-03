import { getRepository, Repository } from "typeorm";

import { Client } from "@modules/clients/entities/Clients";

import { IClientsRepository, IClientDTO } from "../IClientsRepository";

class ClientsRepository implements IClientsRepository {
  private repository: Repository<Client>;

  constructor() {
    this.repository = getRepository(Client);
  }

  async findByName(name: string): Promise<Client[]> {
    return this.repository.find({ name });
  }

  async findById(id: string): Promise<Client> {
    return this.repository.findOne({ id });
  }

  async create({
    name,
    sex,
    birthDate,
    city,
    state,
    age,
  }: IClientDTO): Promise<void> {
    const client = this.repository.create({
      name,
      sex,
      birthDate,
      city,
      state,
      age,
    });

    this.repository.save(client);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({ id });
  }

  async alterName(id: string, name: string): Promise<void> {
    await this.repository.update(id, { name });
  }

  async list(name: string): Promise<Client[]> {
    const filter = {};

    if (name) Object.assign(filter, { name });

    return this.repository.find(filter);
  }
}

export { ClientsRepository };

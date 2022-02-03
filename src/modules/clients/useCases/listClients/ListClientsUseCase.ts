import { inject, injectable } from "tsyringe";

import { Client } from "@modules/clients/entities/Clients";
import { IClientsRepository } from "@modules/clients/repositories/IClientsRepository";

@injectable()
class ListClientsUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}

  async execute(name): Promise<Client[]> {
    return this.clientsRepository.list(name);
  }
}

export { ListClientsUseCase };

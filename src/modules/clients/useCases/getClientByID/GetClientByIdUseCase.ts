import { inject, injectable } from "tsyringe";

import { Client } from "@modules/clients/entities/Clients";
import { IClientsRepository } from "@modules/clients/repositories/IClientsRepository";

@injectable()
class GetClientByIdUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}

  async execute(id: string): Promise<Client> {
    return this.clientsRepository.findById(id);
  }
}

export { GetClientByIdUseCase };

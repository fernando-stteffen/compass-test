import { inject, injectable } from "tsyringe";

import { IClientsRepository } from "@modules/clients/repositories/IClientsRepository";

@injectable()
class DeleteClientUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}

  async execute(id: string): Promise<void> {
    return this.clientsRepository.delete(id);
  }
}

export { DeleteClientUseCase };

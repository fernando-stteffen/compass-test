import { inject, injectable } from "tsyringe";

import { AppError } from "@errors/AppError";
import { IClientsRepository } from "@modules/clients/repositories/IClientsRepository";

interface IRequest {
  id: string;
  name: string;
}

@injectable()
class AlterClientNameUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}

  async execute(requestParams: IRequest): Promise<void> {
    const requiredParams = ["name", "id"];

    requiredParams.forEach((param) => {
      if (!requestParams[param]) {
        throw new AppError(`Missing property ${param}`);
      }
    });

    const { id, name } = requestParams;

    return this.clientsRepository.alterName(id, name);
  }
}

export { AlterClientNameUseCase };

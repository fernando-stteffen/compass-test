import { inject, injectable } from "tsyringe";

import { AppError } from "@errors/AppError";
import { ICityRepository } from "@modules/cities/repositories/ICityRepository";

interface IRequest {
  name: string;
  state: string;
}

@injectable()
class CreateCityUseCase {
  constructor(
    @inject("CitiesRepository")
    private citiesRepository: ICityRepository
  ) {}

  async execute(request: IRequest): Promise<void> {
    const requiredParams = ["name", "state"];

    requiredParams.forEach((param) => {
      if (!request[param]) {
        throw new AppError(`Missing property ${param}`);
      }
    });

    const { name, state } = request;

    const cityAlreadyExistis = await this.citiesRepository.findByNameAndState({
      name,
      state,
    });

    if (cityAlreadyExistis) {
      throw new AppError("That city already exists!");
    }

    await this.citiesRepository.create({
      name,
      state,
    });
  }
}

export { CreateCityUseCase };

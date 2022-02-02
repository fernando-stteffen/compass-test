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

  async execute({ name, state }: IRequest): Promise<void> {
    const cityAlreadyExistis = await this.citiesRepository.findByNameAndState({
      name,
      state,
    });

    if (cityAlreadyExistis) {
      throw new AppError("That city already exists!");
    }

    this.citiesRepository.create({
      name,
      state,
    });
  }
}

export { CreateCityUseCase };

import { inject, injectable } from "tsyringe";

import { City } from "@modules/cities/entities/City";
import { ICityRepository } from "@modules/cities/repositories/ICityRepository";

@injectable()
class ListCitiesUseCase {
  constructor(
    @inject("CitiesRepository")
    private citiesRepository: ICityRepository
  ) {}

  async execute(name, state): Promise<City[]> {
    return this.citiesRepository.list({ name, state });
  }
}

export { ListCitiesUseCase };

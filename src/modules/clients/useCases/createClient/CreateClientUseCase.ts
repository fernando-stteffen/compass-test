import { inject, injectable } from "tsyringe";

import { AppError } from "@errors/AppError";
import { ICityRepository } from "@modules/cities/repositories/ICityRepository";
import { IClientsRepository } from "@modules/clients/repositories/IClientsRepository";
import { ageCalCulation } from "@utils/ageCalculate";

interface IRequest {
  name: string;
  sex: string;
  birthDate: Date;
  cityName: string;
}

@injectable()
class CreateClientUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository,
    @inject("CitiesRepository")
    private citiesRepsitory: ICityRepository
  ) {}

  async execute(request: IRequest) {
    const requiredParams = ["name", "sex", "birthDate", "cityName"];

    requiredParams.forEach((param) => {
      if (!request[param]) {
        throw new AppError(`Missing property ${param}`);
      }
    });

    const { name, sex, birthDate, cityName } = request;

    const sexOptions = ["M", "F"];
    const sexNormalize = sex.toUpperCase();

    if (!sexOptions.includes(sexNormalize)) {
      throw new AppError("Invalid sex param!");
    }

    const city = await this.citiesRepsitory.findByName(cityName);

    if (!city) {
      throw new AppError(`This city not exists.`);
    }

    const age = ageCalCulation(new Date(birthDate).toDateString());

    await this.clientsRepository.create({
      name,
      sex: sexNormalize,
      birthDate,
      age,
      city: city.name,
      state: city.state,
    });
  }
}

export { CreateClientUseCase };

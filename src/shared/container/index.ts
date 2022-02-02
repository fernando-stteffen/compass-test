import { container } from "tsyringe";

import { ICityRepository } from "@modules/cities/repositories/ICityRepository";
import { CityRepository } from "@modules/cities/repositories/implementations/CityRepository";

container.registerSingleton<ICityRepository>(
  "CitiesRepository",
  CityRepository
);

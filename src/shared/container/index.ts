import { container } from "tsyringe";

import { ICityRepository } from "@modules/cities/repositories/ICityRepository";
import { CityRepository } from "@modules/cities/repositories/implementations/CityRepository";
import { IClientsRepository } from "@modules/clients/repositories/IClientsRepository";
import { ClientsRepository } from "@modules/clients/repositories/implements/ClientsRepository";

container.registerSingleton<ICityRepository>(
  "CitiesRepository",
  CityRepository
);

container.registerSingleton<IClientsRepository>(
  "ClientsRepository",
  ClientsRepository
);

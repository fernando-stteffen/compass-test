import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateClientUseCase } from "./CreateClientUseCase";

class CreateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, sex, birthDate, cityName } = request.body;

    const createClientUseCase = container.resolve(CreateClientUseCase);

    await createClientUseCase.execute({ name, sex, birthDate, cityName });

    return response.status(201).send();
  }
}

export { CreateClientController };

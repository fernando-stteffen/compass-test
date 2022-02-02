import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCitiesUseCase } from "./ListCitiesUseCase";

class ListCitiesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, state } = request.query;

    const listCitiesUseCase = container.resolve(ListCitiesUseCase);

    const cities = await listCitiesUseCase.execute(name, state);

    return response.json(cities);
  }
}

export { ListCitiesController };

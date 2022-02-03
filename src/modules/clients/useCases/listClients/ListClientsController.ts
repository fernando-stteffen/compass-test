import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListClientsUseCase } from "./ListClientsUseCase";

class ListClientsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.query;

    const listClientsUseCase = container.resolve(ListClientsUseCase);

    const client = await listClientsUseCase.execute(name);

    return response.json(client);
  }
}

export { ListClientsController };

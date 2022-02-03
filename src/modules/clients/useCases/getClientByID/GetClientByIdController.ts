import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetClientByIdUseCase } from "./GetClientByIdUseCase";

class GetClientByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getClientByIdUseCase = container.resolve(GetClientByIdUseCase);

    const client = await getClientByIdUseCase.execute(id);

    return response.json(client);
  }
}

export { GetClientByIdController };

import { Request, Response } from "express";
import { container } from "tsyringe";

import { AlterClientNameUseCase } from "./AlterClientNameUseCase";

class AlterClientNameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, name } = request.body;

    const alterClientNameUseCase = container.resolve(AlterClientNameUseCase);

    await alterClientNameUseCase.execute({ id, name });

    return response.status(200).send();
  }
}

export { AlterClientNameController };

import { Router } from "express";

import { CreateClientController } from "@modules/clients/useCases/createClient/CreateClientController";

const clientsRoutes = Router();

const createClientControlelr = new CreateClientController();

clientsRoutes.post("/", createClientControlelr.handle);

export { clientsRoutes };

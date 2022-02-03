import { Router } from "express";

import { CreateClientController } from "@modules/clients/useCases/createClient/CreateClientController";
import { ListClientsController } from "@modules/clients/useCases/listClients/ListClientsController";

const clientsRoutes = Router();

const createClientController = new CreateClientController();
const listClientsController = new ListClientsController();

clientsRoutes.post("/", createClientController.handle);
clientsRoutes.get("/", listClientsController.handle);

export { clientsRoutes };

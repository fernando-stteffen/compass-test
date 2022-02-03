import { Router } from "express";

import { CreateClientController } from "@modules/clients/useCases/createClient/CreateClientController";
import { GetClientByIdController } from "@modules/clients/useCases/getClientByID/GetClientByIdController";
import { ListClientsController } from "@modules/clients/useCases/listClients/ListClientsController";

const clientsRoutes = Router();

const createClientController = new CreateClientController();
const listClientsController = new ListClientsController();
const getClientByIdController = new GetClientByIdController();

clientsRoutes.post("/", createClientController.handle);
clientsRoutes.get("/", listClientsController.handle);
clientsRoutes.get("/:id", getClientByIdController.handle);

export { clientsRoutes };

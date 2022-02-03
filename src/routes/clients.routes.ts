import { Router } from "express";

import { AlterClientNameController } from "@modules/clients/useCases/alterClientName/AlterClientNameController";
import { CreateClientController } from "@modules/clients/useCases/createClient/CreateClientController";
import { DeleteClientController } from "@modules/clients/useCases/deleteClient/DeleteClientController";
import { GetClientByIdController } from "@modules/clients/useCases/getClientByID/GetClientByIdController";
import { ListClientsController } from "@modules/clients/useCases/listClients/ListClientsController";

const clientsRoutes = Router();

const createClientController = new CreateClientController();
const listClientsController = new ListClientsController();
const getClientByIdController = new GetClientByIdController();
const deleteClientController = new DeleteClientController();
const alterClientNameController = new AlterClientNameController();

clientsRoutes.post("/", createClientController.handle);
clientsRoutes.get("/", listClientsController.handle);
clientsRoutes.get("/:id", getClientByIdController.handle);
clientsRoutes.delete("/:id", deleteClientController.handle);
clientsRoutes.patch("/", alterClientNameController.handle);

export { clientsRoutes };

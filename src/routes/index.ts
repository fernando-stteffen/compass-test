import { Router } from "express";

import { citiesRoutes } from "./cities.routes";
import { clientsRoutes } from "./clients.routes";

const router = Router();

router.use("/cities", citiesRoutes);
router.use("/clients", clientsRoutes);

export { router };

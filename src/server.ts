import express, { NextFunction, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import "express-async-errors";

import "./database";

const PORT = 3000;

const app = express();

app.use(express.json());

app.listen(PORT, () =>
  console.log(`Server as Listen on http://localhost:${PORT}`)
);

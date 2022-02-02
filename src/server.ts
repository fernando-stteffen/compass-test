import express, { NextFunction, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import "express-async-errors";

import "./database";

import "@shared/container";

import "@errors/AppError";

const PORT = 3000;

const app = express();

app.use(express.json());

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      message: `Internal server error - ${err.message}`,
    });

    next();
  }
);
app.listen(PORT, () =>
  console.log(`Server as Listen on http://localhost:${PORT}`)
);

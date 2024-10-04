import { Router, Request, Response } from "express";

const routes = Router();

routes.get("/api", (request: Request, response: Response) => {
  response.send({ message: "Eco Smart Api" });
});

export { routes };

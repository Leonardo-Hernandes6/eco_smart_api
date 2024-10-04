import express, { Application } from "express";
import cors from "cors";

import { routes } from "./routes";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
  }

  private middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }
}

const port: number = 8000;
const app = new App().app;

app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log("✅ Server started successfully!, port: ", port);
});

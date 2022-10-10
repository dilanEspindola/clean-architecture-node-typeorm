import express from "express";
import { router } from "./routes";
import { appDataSource } from "../implements/mysql";

export class Server {
  private readonly app: express.Express;
  private readonly port: string | number;

  constructor(port: string | number) {
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(router);
    this.port = port;
  }

  startSever() {
    this.app.listen(this.port, async () => {
      await this.runDb();
      console.log("server on port", this.port);
    });
  }

  async runDb() {
    await appDataSource.initialize();
  }
}

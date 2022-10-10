import { DataSource } from "typeorm";
import { defaults } from "../../../domain/config/";
import { User } from "./models";

export const appDataSource = new DataSource({
  type: "mysql",
  port: defaults.DbConnection.port,
  host: defaults.DbConnection.host,
  database: defaults.DbConnection.name,
  username: defaults.DbConnection.username,
  password: defaults.DbConnection.password,
  synchronize: true,
  logging: true,
  entities: [User],
});

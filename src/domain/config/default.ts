import { config } from "dotenv";
config();

export default {
  DbConnection: {
    name: process.env.DB_NAME as string,
    type: process.env.DB_TYPE as string,
    port: process.env.DB_PORT as number | undefined,
    username: process.env.DB_USERNAME as string,
    password: process.env.DB_PASSWORD as string,
    host: process.env.DB_HOST as string,
  },
};

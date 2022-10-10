import { Server } from "./infrastructure/api-rest/Server";

function main() {
  const server = new Server(3001);
  server.startSever();
}
main();

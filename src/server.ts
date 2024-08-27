import fastify from "fastify";

import { getTransactions } from "./routes/get-transactions";

const app = fastify();

app.register(getTransactions);

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running!");
});

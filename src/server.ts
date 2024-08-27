import fastify from "fastify";
import fastifyCors from "@fastify/cors";

import { getTransactions } from "./routes/get-transactions";
import { createNewTransaction } from "./routes/create-new-transaction";
import { deleteTransaction } from "./routes/delete-transaction";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
  methods: ["GET", "POST", "DELETE"],
});

app.register(getTransactions);
app.register(createNewTransaction);
app.register(deleteTransaction);

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running!");
});

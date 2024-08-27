import fastify from "fastify";

import { getTransactions } from "./routes/get-transactions";
import { createNewTransaction } from "./routes/create-new-transaction";
import { deleteTransaction } from "./routes/delete-transaction";

const app = fastify();

app.register(getTransactions);
app.register(createNewTransaction);
app.register(deleteTransaction);

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running!");
});

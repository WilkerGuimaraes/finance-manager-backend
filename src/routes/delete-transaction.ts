import { FastifyInstance } from "fastify";
import { z } from "zod";

import { prisma } from "../lib/prisma";

export async function deleteTransaction(app: FastifyInstance) {
  app.delete("/transactions/:id", async (request, reply) => {
    const transactionSchema = z.object({
      id: z.string(),
    });

    const { id } = transactionSchema.parse(request.params);

    await prisma.transaction.delete({
      where: {
        id,
      },
    });

    return reply.status(204).send();
  });
}

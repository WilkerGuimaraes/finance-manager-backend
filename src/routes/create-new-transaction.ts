import { FastifyInstance } from "fastify";
import { z } from "zod";

import { prisma } from "../lib/prisma";

export async function createNewTransaction(app: FastifyInstance) {
  app.post("/transactions", async (request, reply) => {
    const transactionSchema = z.object({
      description: z.string().min(4, {
        message: "A descrição precisa conter pelo menos 4 caracteres.",
      }),
      type: z.string(),
      category: z.string(),
      price: z.number(),
    });

    const { description, type, category, price } = transactionSchema.parse(
      request.body
    );

    const transaction = await prisma.transaction.create({
      data: {
        description,
        type,
        category,
        price,
        createdAt: new Date(),
      },
    });

    return reply.status(201).send({ transactionId: transaction.id });
  });
}

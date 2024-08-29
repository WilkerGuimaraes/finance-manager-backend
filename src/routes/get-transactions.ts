import { FastifyInstance } from "fastify";
import { z } from "zod";

import { prisma } from "../lib/prisma";

export async function getTransactions(app: FastifyInstance) {
  app.get("/transactions", async (request, reply) => {
    const getTransactionsParams = z.object({
      page: z.string().regex(/^\d+$/).optional(),
      description: z.string().optional(),
    });

    const { page, description } = getTransactionsParams.parse(request.query);

    const currentaPage = page ? parseInt(page, 10) : 1;
    const offset = (currentaPage - 1) * 10;

    const transactions = await prisma.transaction.findMany({
      where: {
        description: {
          contains: description?.toLocaleLowerCase(),
        },
      },
      orderBy: {
        createdAt: "asc",
      },
      take: 10,
      skip: offset,
    });

    const count = await prisma.transaction.count({
      where: {
        description: {
          contains: description?.toLocaleLowerCase(),
        },
      },
    });

    return reply.send({ transactions, count });
  });
}

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    const transactions = [
      {
        description: "Desenvolvimento de software",
        type: "income",
        category: "Serviços",
        price: 12000.0,
        createdAt: "2024-01-15T10:00:00.000Z",
      },
      {
        description: "Compra de materiais de escritório",
        type: "outcome",
        category: "Escritório",
        price: 200.5,
        createdAt: "2024-01-20T15:00:00.000Z",
      },
      {
        description: "Pagamento de aluguel",
        type: "outcome",
        category: "Moradia",
        price: 1200.0,
        createdAt: "2024-02-01T08:30:00.000Z",
      },
      {
        description: "Venda de produtos digitais",
        type: "income",
        category: "Venda",
        price: 5000.75,
        createdAt: "2024-02-14T12:00:00.000Z",
      },
      {
        description: "Assinatura de revista",
        type: "outcome",
        category: "Entretenimento",
        price: 45.0,
        createdAt: "2024-02-28T18:45:00.000Z",
      },
      {
        description: "Freelance de design",
        type: "income",
        category: "Serviços",
        price: 800.0,
        createdAt: "2024-03-05T09:15:00.000Z",
      },
      {
        description: "Compra de supermercado",
        type: "outcome",
        category: "Alimentação",
        price: 350.3,
        createdAt: "2024-03-15T14:00:00.000Z",
      },
      {
        description: "Pagamento de internet",
        type: "outcome",
        category: "Utilidades",
        price: 100.0,
        createdAt: "2024-03-20T07:30:00.000Z",
      },
      {
        description: "Reembolso de viagem",
        type: "income",
        category: "Reembolso",
        price: 1500.0,
        createdAt: "2024-04-01T11:00:00.000Z",
      },
      {
        description: "Compra de eletrônicos",
        type: "outcome",
        category: "Tecnologia",
        price: 2300.45,
        createdAt: "2024-04-10T16:30:00.000Z",
      },
      {
        description: "Venda de artigos esportivos",
        type: "income",
        category: "Venda",
        price: 400.0,
        createdAt: "2024-04-15T13:20:00.000Z",
      },
      {
        description: "Pagamento de academia",
        type: "outcome",
        category: "Saúde",
        price: 60.0,
        createdAt: "2024-04-20T10:00:00.000Z",
      },
      {
        description: "Investimento em ações",
        type: "income",
        category: "Investimentos",
        price: 7000.0,
        createdAt: "2024-05-01T09:45:00.000Z",
      },
      {
        description: "Compra de livros",
        type: "outcome",
        category: "Educação",
        price: 90.0,
        createdAt: "2024-05-05T19:30:00.000Z",
      },
      {
        description: "Serviço de manutenção de TI",
        type: "income",
        category: "Serviços",
        price: 3000.5,
        createdAt: "2024-05-10T08:00:00.000Z",
      },
      {
        description: "Compra de roupas",
        type: "outcome",
        category: "Vestuário",
        price: 250.0,
        createdAt: "2024-05-15T14:15:00.000Z",
      },
      {
        description: "Recebimento de comissão",
        type: "income",
        category: "Comissão",
        price: 500.0,
        createdAt: "2024-05-20T11:30:00.000Z",
      },
      {
        description: "Pagamento de contas de energia",
        type: "outcome",
        category: "Utilidades",
        price: 200.0,
        createdAt: "2024-05-25T16:00:00.000Z",
      },
      {
        description: "Lucro de venda de ações",
        type: "income",
        category: "Investimentos",
        price: 3000.0,
        createdAt: "2024-06-01T10:30:00.000Z",
      },
      {
        description: "Doação para caridade",
        type: "outcome",
        category: "Doação",
        price: 150.0,
        createdAt: "2024-06-05T09:00:00.000Z",
      },
      {
        description: "Pagamento de seguro de saúde",
        type: "outcome",
        category: "Saúde",
        price: 300.0,
        createdAt: "2024-06-10T15:45:00.000Z",
      },
      {
        description: "Consultoria de marketing",
        type: "income",
        category: "Serviços",
        price: 4000.0,
        createdAt: "2024-06-15T11:00:00.000Z",
      },
      {
        description: "Compra de ingressos de cinema",
        type: "outcome",
        category: "Entretenimento",
        price: 60.0,
        createdAt: "2024-06-20T20:00:00.000Z",
      },
      {
        description: "Pagamento de plano de saúde",
        type: "outcome",
        category: "Saúde",
        price: 500.0,
        createdAt: "2024-06-25T10:15:00.000Z",
      },
    ];

    for (const transaction of transactions) {
      await prisma.transaction.create({
        data: {
          description: transaction.description,
          type: transaction.type,
          category: transaction.category,
          price: transaction.price,
          createdAt: transaction.createdAt,
        },
      });
    }
  } catch (error) {
    console.log("Error to create transactions!", error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

seedDatabase();

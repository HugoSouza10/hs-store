import { PrismaClient } from "@prisma/client";

declare global {
  // Para evitar múltiplas instâncias no ambiente de desenvolvimento
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query", "info", "warn", "error"], // opcional: para debug
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
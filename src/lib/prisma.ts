import { PrismaClient } from '../generated/prisma/client'; // Importe do local do 'output'
import { PrismaPg } from '@prisma/adapter-pg'; // Adaptador para conectar banco postgren
import pg from 'pg';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({ adapter }); // Obrigatório passar o adapter no Prisma 7

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db;
}

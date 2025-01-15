import { PrismaClient } from "@prisma/client";

declare global {
  // Чтобы избежать ошибок при использовании `globalThis` с TypeScript
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient({
  log: ["query", "info", "warn", "error"], // Логгирование запросов (опционально)
});

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma; // Храним клиент в глобальной области для разработки
}

export default prisma;
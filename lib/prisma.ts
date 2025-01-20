import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof prismaClientSingleton> | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

const isReadOnlyMode = process.env.READ_ONLY_MODE === "true";

prisma.$use(async (params, next) => {
  if (
    isReadOnlyMode &&
    ["create", "update", "delete"].includes(params.action)
  ) {
    throw new Error(
      "Database is in read-only mode. Write operations are not allowed."
    );
  }
  return next(params);
});

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;

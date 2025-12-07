-- CreateEnum
CREATE TYPE "StatusInventory" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateTable
CREATE TABLE "InventoryCategory" (
    "id" TEXT NOT NULL,
    "name" VARCHAR NOT NULL,
    "description" VARCHAR,
    "status" "StatusInventory" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "InventoryCategory_pkey" PRIMARY KEY ("id")
);

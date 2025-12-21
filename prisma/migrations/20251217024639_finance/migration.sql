-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('INCOME', 'EXPENSE');

-- CreateEnum
CREATE TYPE "paymentMethod" AS ENUM ('CASH', 'CREDIT_CARD', 'BANK_TRANSFER', 'MOBILE_PAYMENT');

-- CreateEnum
CREATE TYPE "TransactionCategory" AS ENUM ('SALE', 'PURCHASE', 'SALARY', 'RENT', 'UTILITIES', 'MAINTENANCE', 'OTHER');

-- CreateTable
CREATE TABLE "Finnace" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "transactionType" "TransactionType" NOT NULL,
    "transactionCategory" "TransactionCategory" NOT NULL,
    "notes" VARCHAR,
    "paymentMethod" "paymentMethod" NOT NULL DEFAULT 'CASH',
    "transactionId" TEXT NOT NULL,
    "inventoryId" TEXT NOT NULL,
    "transactionDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "Finnace_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Finnace" ADD CONSTRAINT "Finnace_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "InventoryManagement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateEnum
CREATE TYPE "UnitType" AS ENUM ('KG', 'Liters', 'Bags', 'Pieces', 'Tons');

-- CreateEnum
CREATE TYPE "StockType" AS ENUM ('IN', 'OUT');

-- CreateEnum
CREATE TYPE "purposeType" AS ENUM ('SALE', 'PURCHASE', 'RETURN', 'DAMAGE');

-- CreateTable
CREATE TABLE "InventoryManagement" (
    "id" TEXT NOT NULL,
    "name" VARCHAR NOT NULL,
    "minimum_stock_level_alert" INTEGER NOT NULL,
    "unit" "UnitType" NOT NULL,
    "cost_per_unit" DOUBLE PRECISION NOT NULL,
    "supplier_name" VARCHAR,
    "supplier_contact" VARCHAR,
    "status" "StatusInventory" NOT NULL DEFAULT 'ACTIVE',
    "notes" VARCHAR,
    "categoryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "InventoryManagement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InventoryTransaction" (
    "id" TEXT NOT NULL,
    "inventoryId" TEXT NOT NULL,
    "stockType" "StockType" NOT NULL,
    "purpose" "purposeType" NOT NULL,
    "transactionQuantity" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "transactionDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" VARCHAR,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "InventoryTransaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InventoryManagement" ADD CONSTRAINT "InventoryManagement_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "InventoryCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryTransaction" ADD CONSTRAINT "InventoryTransaction_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "InventoryManagement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

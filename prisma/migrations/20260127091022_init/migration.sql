-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "StatusInventory" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "UnitType" AS ENUM ('KG', 'Liters', 'Bags', 'Pieces', 'Tons');

-- CreateEnum
CREATE TYPE "StockType" AS ENUM ('IN', 'OUT');

-- CreateEnum
CREATE TYPE "PurposeType" AS ENUM ('SALE', 'PURCHASE', 'RETURN', 'DAMAGE', 'ADJUSTMENT', 'INITIATE_STOCK');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('INCOME', 'EXPENSE');

-- CreateEnum
CREATE TYPE "paymentMethod" AS ENUM ('CASH', 'CREDIT_CARD', 'BANK_TRANSFER', 'MOBILE_PAYMENT');

-- CreateEnum
CREATE TYPE "TransactionCategory" AS ENUM ('SALE', 'PURCHASE', 'SALARY', 'RENT', 'UTILITIES', 'MAINTENANCE', 'OTHER', 'LOGISTICS', 'RETURN', 'DAMAGE', 'ADJUSTMENT');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "verificationToken" VARCHAR,
    "verificationTokenExpires" TIMESTAMP(6),
    "refreshToken" VARCHAR,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "bio" VARCHAR,
    "userId" TEXT NOT NULL,
    "address" JSONB,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

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
    "userId" TEXT,

    CONSTRAINT "InventoryManagement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InventoryTransaction" (
    "id" TEXT NOT NULL,
    "inventoryId" TEXT NOT NULL,
    "stockType" "StockType" NOT NULL,
    "transactionQuantity" INTEGER NOT NULL,
    "transactionDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" VARCHAR,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,
    "purpose" "PurposeType" NOT NULL,
    "stock" INTEGER NOT NULL,
    "userId" TEXT,

    CONSTRAINT "InventoryTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Finnace" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "transactionType" "TransactionType" NOT NULL,
    "transactionCategory" "TransactionCategory" NOT NULL,
    "notes" VARCHAR,
    "paymentMethod" "paymentMethod" NOT NULL DEFAULT 'CASH',
    "transactionId" TEXT NOT NULL,
    "inventoryId" TEXT,
    "transactionDate" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Finnace_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductFromMarket" (
    "id" TEXT NOT NULL,
    "name" VARCHAR NOT NULL,
    "description" VARCHAR,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "ProductFromMarket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productpricefrommarket" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "category" VARCHAR NOT NULL,
    "category_id" VARCHAR NOT NULL,
    "weight" VARCHAR NOT NULL,
    "price" VARCHAR NOT NULL,
    "source" VARCHAR NOT NULL,
    "scraped_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "productpricefrommarket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "crops" (
    "id" UUID NOT NULL,
    "name_english" VARCHAR NOT NULL,
    "name_bangla" VARCHAR,
    "variety" VARCHAR,
    "category" VARCHAR,
    "growth_duration_days" VARCHAR,

    CONSTRAINT "crops_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fertilizer_application_schedule" (
    "id" UUID NOT NULL,
    "fertilizer_plan_id" UUID,
    "stage" VARCHAR,
    "timing_days_after_sowing" INTEGER,
    "method_of_application" TEXT,

    CONSTRAINT "fertilizer_application_schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fertilizer_planning" (
    "id" UUID NOT NULL,
    "crop_id" UUID,
    "calculation_basis" TEXT,

    CONSTRAINT "fertilizer_planning_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fertilizer_requirements" (
    "id" UUID NOT NULL,
    "fertilizer_plan_id" UUID,
    "fertilizer_name" VARCHAR,
    "quantity_kg" DECIMAL(10,3),

    CONSTRAINT "fertilizer_requirements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fertilizer_split_ratio" (
    "id" UUID NOT NULL,
    "schedule_id" UUID,
    "fertilizer_name" VARCHAR,
    "split_ratio" DECIMAL(4,2),

    CONSTRAINT "fertilizer_split_ratio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Field" (
    "id" TEXT NOT NULL,
    "name" VARCHAR NOT NULL,
    "location" VARCHAR NOT NULL,
    "size_Square_Meter" DOUBLE PRECISION NOT NULL,
    "imageURL" TEXT NOT NULL,
    "N" DOUBLE PRECISION NOT NULL,
    "P" DOUBLE PRECISION NOT NULL,
    "K" DOUBLE PRECISION NOT NULL,
    "pH" DOUBLE PRECISION NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "Field_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "crops_name_english_key" ON "crops"("name_english");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryManagement" ADD CONSTRAINT "InventoryManagement_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "InventoryCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryManagement" ADD CONSTRAINT "InventoryManagement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryTransaction" ADD CONSTRAINT "InventoryTransaction_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "InventoryManagement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryTransaction" ADD CONSTRAINT "InventoryTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Finnace" ADD CONSTRAINT "Finnace_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "InventoryManagement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Finnace" ADD CONSTRAINT "Finnace_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fertilizer_application_schedule" ADD CONSTRAINT "fertilizer_application_schedule_fertilizer_plan_id_fkey" FOREIGN KEY ("fertilizer_plan_id") REFERENCES "fertilizer_planning"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "fertilizer_planning" ADD CONSTRAINT "fertilizer_planning_crop_id_fkey" FOREIGN KEY ("crop_id") REFERENCES "crops"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "fertilizer_requirements" ADD CONSTRAINT "fertilizer_requirements_fertilizer_plan_id_fkey" FOREIGN KEY ("fertilizer_plan_id") REFERENCES "fertilizer_planning"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "fertilizer_split_ratio" ADD CONSTRAINT "fertilizer_split_ratio_schedule_id_fkey" FOREIGN KEY ("schedule_id") REFERENCES "fertilizer_application_schedule"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Field" ADD CONSTRAINT "Field_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

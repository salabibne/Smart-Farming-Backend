-- DropForeignKey
ALTER TABLE "public"."Finnace" DROP CONSTRAINT "Finnace_inventoryId_fkey";

-- AlterTable
ALTER TABLE "Finnace" ALTER COLUMN "inventoryId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Finnace" ADD CONSTRAINT "Finnace_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "InventoryManagement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

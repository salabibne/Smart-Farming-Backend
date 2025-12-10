/*
  Warnings:

  - Changed the type of `purpose` on the `InventoryTransaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PurposeType" AS ENUM ('SALE', 'PURCHASE', 'RETURN', 'DAMAGE');

-- AlterTable
ALTER TABLE "InventoryTransaction" DROP COLUMN "purpose",
ADD COLUMN     "purpose" "PurposeType" NOT NULL;

-- DropEnum
DROP TYPE "public"."purposeType";

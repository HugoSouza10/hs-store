/*
  Warnings:

  - You are about to drop the column `categorySlug` on the `Product` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "categorySlug",
ADD COLUMN     "categoryId" TEXT NOT NULL,
ALTER COLUMN "description" SET NOT NULL;

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "imageUrl" TEXT[],

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

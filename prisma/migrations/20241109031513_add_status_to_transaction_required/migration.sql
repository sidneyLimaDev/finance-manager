/*
  Warnings:

  - Made the column `paymentStatus` on table `Transaction` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "paymentStatus" SET NOT NULL;

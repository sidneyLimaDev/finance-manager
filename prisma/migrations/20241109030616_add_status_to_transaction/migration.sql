-- CreateEnum
CREATE TYPE "TransactionPaymentStatus" AS ENUM ('PAID', 'PAYABLE');

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "paymentStatus" "TransactionPaymentStatus";

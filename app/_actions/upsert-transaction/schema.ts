import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionPaymentStatus,
  TransactionType,
} from "@prisma/client";
import { z } from "zod";

export const upsertTransactionSchema = z.object({
  name: z.string().min(1),
  amount: z.number().positive(),
  type: z.nativeEnum(TransactionType),
  category: z.nativeEnum(TransactionCategory),
  paymentMethod: z.nativeEnum(TransactionPaymentMethod),
  date: z.date(),
  paymentStatus: z.nativeEnum(TransactionPaymentStatus),
});

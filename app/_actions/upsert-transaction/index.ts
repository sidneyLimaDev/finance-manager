"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionPaymentStatus,
  TransactionType,
} from "@prisma/client";
import { upsertTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

interface upsertTransactionParams {
  id?: string;
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
  paymentStatus?: TransactionPaymentStatus;
}
export const upsertTransaction = async (params: upsertTransactionParams) => {
  upsertTransactionSchema.parse(params);
  const { userId } = await auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }

  await db.transaction.upsert({
    update: { ...params, userId },
    create: {
      ...params,
      userId,
      paymentStatus: params.paymentStatus ?? TransactionPaymentStatus.PAYABLE,
    },
    where: {
      id: params?.id ?? "",
    },
  });
  revalidatePath("/transactions");
};

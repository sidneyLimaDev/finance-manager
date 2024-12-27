import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import React from "react";
import SummaryCard from "./summary-card";
import { db } from "@/app/_lib/prisma";

interface SummaryCardsProps {
  month: string;
}

const SummaryCards = async ({ month }: SummaryCardsProps) => {
  const where = {
    date: {
      gte: new Date(`2024, ${month}-01`),
      lt: new Date(`2024, ${month}-31`),
    },
  };
  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "DEPOSIT" },
        _sum: { amount: true },
      })
    )._sum?.amount,
  );
  const investmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "INVESTMENT" },
        _sum: { amount: true },
      })
    )._sum?.amount,
  );
  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "EXPENSE" },
        _sum: { amount: true },
      })
    )._sum?.amount,
  );
  const balance = depositsTotal - investmentsTotal - expensesTotal;
  return (
    <div className="space-y-6">
      <SummaryCard
        title={"Saldo"}
        amout={balance}
        icon={<WalletIcon size={16} />}
        size={"Large"}
      />
      <div className="grid grid-cols-3 gap-8">
        <SummaryCard
          title={"Investido"}
          amout={investmentsTotal}
          icon={<PiggyBankIcon size={16} />}
        />
        <SummaryCard
          title={"Receita"}
          amout={depositsTotal}
          icon={<TrendingUpIcon size={16} className="text-primary" />}
        />
        <SummaryCard
          title={"Despesas"}
          amout={expensesTotal}
          icon={<TrendingDownIcon size={16} className="text-red-500" />}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
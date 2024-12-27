import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import React from "react";
import SummaryCard from "./summary-card";

interface SummaryCardsProps {
  month: string;
  balance: number;
  investmentsTotal: number;
  depositsTotal: number;
  expensesTotal: number;
}

const SummaryCards = async ({
  balance,
  investmentsTotal,
  depositsTotal,
  expensesTotal,
}: SummaryCardsProps) => {
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

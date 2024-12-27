"use client";
import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/app/_components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { TransactionType } from "@prisma/client";
import { TransactionPercentagePerType } from "@/app/_data/get-dashboard/types";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import PercentageItem from "./percentage-item";

const chartConfig = {
  [TransactionType.INVESTMENT]: {
    label: "Investimentos",
    color: "#ffffff",
  },
  [TransactionType.DEPOSIT]: {
    label: "Depositos",
    color: "#55B02E",
  },
  [TransactionType.EXPENSE]: {
    label: "Despesas",
    color: "#E93030",
  },
} satisfies ChartConfig;

interface TransactionPieChartProps {
  typesPercentage: TransactionPercentagePerType;
  investmentsTotal: number;
  depositsTotal: number;
  expensesTotal: number;
}

const TransactionPieChart = ({
  depositsTotal,
  investmentsTotal,
  expensesTotal,
  typesPercentage,
}: TransactionPieChartProps) => {
  const chartData = [
    {
      type: TransactionType.INVESTMENT,
      amount: investmentsTotal,
      fill: "#ffffff",
    },
    {
      type: TransactionType.DEPOSIT,
      amount: depositsTotal,
      fill: "#55B02E",
    },
    {
      type: TransactionType.EXPENSE,
      amount: expensesTotal,
      fill: "#E93030",
    },
  ];
  return (
    <Card className="flex flex-col p-12">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={80}
            />
          </PieChart>
        </ChartContainer>
        <div className="space-y-2">
          <PercentageItem
            value={typesPercentage[TransactionType.DEPOSIT]}
            title={"Receita"}
            icon={<TrendingUpIcon size={16} className="text-primary" />}
          />
          <PercentageItem
            value={typesPercentage[TransactionType.INVESTMENT]}
            title={"Investido"}
            icon={<PiggyBankIcon size={16} />}
          />
          <PercentageItem
            value={typesPercentage[TransactionType.EXPENSE]}
            title={"Despesa"}
            icon={
              <TrendingDownIcon
                size={16}
                className="text-primary text-red-500"
              />
            }
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionPieChart;

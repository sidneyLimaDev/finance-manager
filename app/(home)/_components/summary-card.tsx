import AddTransactionButton from "@/app/_components/add-transaction-button";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import React from "react";

interface SummaryCardProps {
  title: string;
  amout: number;
  icon: React.ReactNode;
  color?: string;
  size?: "small" | "Large";
}

const SummaryCard = ({
  title,
  amout,
  icon,
  size = "small",
}: SummaryCardProps) => {
  return (
    <Card>
      <CardHeader className="flex-row items-center gap-4">
        {icon}
        <p
          className={`${size === "small" ? "text-muted-foreground" : "text-white opacity-70"}`}
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p
          className={`${size === "small" ? "text-2xl" : "text-4xl"} font-bold`}
        >
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amout)}
        </p>

        {size === "Large" && <AddTransactionButton />}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;

import React, { FC } from "react";

type TStatCard = {
  value: string | number;
  title: string;
};

const StatCard: FC<TStatCard> = ({ value, title }) => {
  return (
    <div className="bg-[#14141B] text-white w-full p-6 rounded-xl border-[#4A4A4A] border-2">
      <div className="text-center">
        <p className="text-2xl font-bold mb-1">{value}</p>
        <p className="font-medium text-opacity-80 text-white">{title}</p>
      </div>
    </div>
  );
};

export default StatCard;

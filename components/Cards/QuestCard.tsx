import Image from "next/image";
import React, { FC } from "react";

type TQuestCard = {
  title: string;
  subTitle: string;
};

const QuestCard: FC<TQuestCard> = ({ title, subTitle }) => {
  return (
    <div
      className="bg-[#0F1622] py-7 px-6  max-w-xl flex justify-between items-center space-x-4 rounded-xl border-[#1853C6] border-2"
      style={
        {
          // borderImageSource: "linear-gradient(90deg, #1853C6 0%, #0C2860 100%)",
          // borderImageSlice: 1,
          // borderWidth: "2px",
          // borderStyle: "solid",
          // borderRadius: "12px",
        }
      }
    >
      <div>
        <div className="font-bold text-xl mb-1">{title}</div>
        <div className="font-medium text-opacity-80 text-white">{subTitle}</div>
        <div className="flex space-x-1 mt-4">
          <div className="text-[#2FF337] rounded-lg  bg-[#1D3C1A] p-1.5 flex space-x-1 items-center text-sm font-semibold">
            <Image
              src={"/images/bolt-alt.png"}
              width={12}
              height={15}
              alt="bolt-image"
              className="w-3 h-4"
            ></Image>
            <div>45 XP</div>
          </div>
        </div>
      </div>
      <div className="rounded-xl border-[#CCD9F6] p-2.5 text-[#CCD9F6] border">
        <Image
          src={"/images/plus.png"}
          width={16}
          height={16}
          alt="plus icon"
        ></Image>
      </div>
    </div>
  );
};

export default QuestCard;

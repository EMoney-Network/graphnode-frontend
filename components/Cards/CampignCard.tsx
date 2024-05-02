import Image from "next/image";
import React, { FC } from "react";

type TCampignCard = {
  title?: string;
  subTitle?: string;
};

const CampignCard: FC<TCampignCard> = ({ title, subTitle }) => {
  return (
    <div className="max-w-[350px] flex justify-between items-center">
      <div className="space-y-4">
        <Image
          src={"/images/sample-quest.png"}
          alt="quest-img"
          className=" w-full rounded"
          width={409}
          height={226}
        ></Image>
        <div className="font-bold lg:text-xl text-base  line-clamp-2">
          {title}
        </div>
        <div className="font-medium text-opacity-80 text-white">{subTitle}</div>
        <div className="flex">
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
    </div>
  );
};

export default CampignCard;

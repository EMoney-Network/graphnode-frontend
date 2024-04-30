"use client";

import Button from "@/components/Buttons/Button";
import CampignCard from "@/components/Cards/CampignCard";
import QuestCard from "@/components/Cards/QuestCard";
import StatCard from "@/components/Cards/StatCard";
import NavBar from "@/components/NavBar/NavBar";
import QuestSlider from "@/components/QuestSlider/QuestSlider";

export default function Components() {
  return (
    <div className="mt-5 p-5 space-y-2">
      <NavBar />
      <Button>Connect Wallet</Button>
      <Button variant="outline" fullWidth>
        Login
      </Button>
      <StatCard title="porgress" value={"12,323"} />
      <div className="max-w-xl space-y-3">
        <QuestCard title="Quest Title" subTitle="Quest Subtitle" />
        <CampignCard title="Documenting Tao: Exploring the Fundamentals of tokens and ETH asdcasdcascddca sd" />
      </div>
      <QuestSlider />
    </div>
  );
}

import Button from "@/components/Buttons/Button";
import StatCard from "@/components/Cards/StatCard";

export default function Dashboard() {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-fixed h-screen"
        style={{
          backgroundImage: "url('/images/bg-rectangle.png')",
        }}
      >
        <div className="flex w-full h-screen justify-center text-center">
          <div className="flex flex-col items-center space-y-10 mt-[10%]">
            <div className="text-[54px] font-bold text-white ">
              Leading the Way with modular RWA Protocol
            </div>
            <div className="text-base text-opacity-80 text-white font-medium mt-5">
              Leading the Way with modular RWA Protocol
            </div>

            <div className="flex items-center justify-center space-x-4 w-[400px]">
              <div className="w-[50%]">
                <Button fullWidth>Connect Wallet</Button>
              </div>
              <div className="w-[50%]">
                <Button variant="outline" fullWidth>
                  Login
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 w-full mt-20">
              <div className="w-[50%]">
                {" "}
                <StatCard title="E-money points pool" value={"12,323"} />
              </div>
              <div className="w-[50%]">
                {" "}
                <StatCard title="User pool" value={"12,323"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-2xl text-white ">Trending Quest</div>
      </div>
    </div>
  );
}

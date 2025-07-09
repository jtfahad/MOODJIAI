import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";


const Sidebar =() => {
  return (
    <div className="w-64 flex flex-col h-vh">
        <div className="flex p-6 pt-10 border-white/10">
            <Image src="/logos/MainLogo.svg" alt="LOGO" width={120} height={40} />
        </div>
        <div className="flex items-center gap-2 pl-5 pb-2 text-[14px] font-[500] leading-[17.52px] text-[#FFFFFF]">
            <Image src="/icons/Favourite.png" alt="fav" width={20} height={20} />
            Favourite
        </div>
        <div className="flex flex-col items-center justify-center pl-3 pb-4">
            <div className="w-full h-[40px] flex justify-center items-center gap-[8px] rounded-[80px] p-[8px] hover:bg-white/5 hover:shadow-lg hover:shadow-[#00000040] hover:backdrop-blur-[20px] cursor-pointer">
                <span className="w-[22px] h-[22px] rounded-full bg-[#84764C]"></span>
                <span className="text-[14px]  font-[400] leading-[17.52px]">Investment Opportunities</span>
            </div>
            <div className="w-full h-[40px] flex justify-center items-center gap-[8px] rounded-[80px] p-[8px] hover:bg-white/5 hover:shadow-lg hover:shadow-[#00000040] hover:backdrop-blur-[20px] cursor-pointer">
                <span className="w-[22px] h-[22px] rounded-full bg-[#744C84]"></span>
                <span className="text-[14px]  font-[400] leading-[17.52px]">Financial Independ...</span>
                <span className="hover:block cursor-pointer"><Image src="/icons/Dots.png" alt="fav" width={20} height={20} /></span>
            </div>
            <div className="w-full h-[40px] flex justify-center items-center gap-[8px] rounded-[80px] p-[8px] hover:bg-white/5 hover:shadow-lg hover:shadow-[#00000040] hover:backdrop-blur-[20px] cursor-pointer">
                <span className="w-[22px] h-[22px] rounded-full bg-[#84764C]"></span>
                <span className="text-[14px]  font-[400] leading-[17.52px]">Investment Opportunities</span>
            </div>
        </div>
        <div className="flex items-center justify-center text-[12px] leading-[160%] font-[500] text-[#FFCD38] cursor-pointer">See all</div>
        <div className="border-b border-[#303030] ml-4 pt-4"></div>

        <div className="flex gap-2 pl-5 pb-2 pt-3 text-[#FFCD38] text-[12px] leading-[160%] font-[500]">
            Today
        </div>
        <div className="flex flex-col items-center justify-center pl-3">
            <div className="w-full h-[40px] flex justify-center items-center gap-[8px] rounded-[80px] p-[8px] hover:bg-white/5 hover:shadow-lg hover:shadow-[#00000040] hover:backdrop-blur-[20px] cursor-pointer">
                <span className="w-[22px] h-[22px] rounded-full bg-[#84764C]"></span>
                <span className="text-[14px]  font-[400] leading-[17.52px]">Investment Opportunities</span>
            </div>
            <div className="w-full h-[40px] flex justify-center items-center gap-[8px] rounded-[80px] p-[8px] hover:bg-white/5 hover:shadow-lg hover:shadow-[#00000040] hover:backdrop-blur-[20px] cursor-pointer">
                <span className="w-[22px] h-[22px] rounded-full bg-[#744C84]"></span>
                <span className="text-[14px]  font-[400] leading-[17.52px]">Passive Income Strategi...</span>
            </div>
            <div className="w-full h-[40px] flex justify-center items-center gap-[8px] rounded-[80px] p-[8px] hover:bg-white/5 hover:shadow-lg hover:shadow-[#00000040] hover:backdrop-blur-[20px] cursor-pointer">
                <span className="w-[22px] h-[22px] rounded-full bg-[#84764C]"></span>
                <span className="text-[14px]  font-[400] leading-[17.52px]">Investment Opportunities</span>
            </div>
        </div>

        <div className="flex gap-2 pl-5 pb-2 pt-3 text-[#FFCD38] text-[12px] leading-[160%] font-[500]">
            Yesterday
        </div>
        <div className="flex flex-col items-center justify-center pl-3">
            <div className="w-full h-[40px] flex justify-center items-center gap-[8px] rounded-[80px] p-[8px] hover:bg-white/5 hover:shadow-lg hover:shadow-[#00000040] hover:backdrop-blur-[20px] cursor-pointer">
                <span className="w-[22px] h-[22px] rounded-full bg-[#84764C]"></span>
                <span className="text-[14px]  font-[400] leading-[17.52px]">Investment Opportunities</span>
            </div>
            <div className="w-full h-[40px] flex justify-center items-center gap-[8px] rounded-[80px] p-[8px] hover:bg-white/5 hover:shadow-lg hover:shadow-[#00000040] hover:backdrop-blur-[20px] cursor-pointer">
                <span className="w-[22px] h-[22px] rounded-full bg-[#744C84]"></span>
                <span className="text-[14px]  font-[400] leading-[17.52px]">Passive Income Strategi...</span>
            </div>
            <div className="w-full h-[40px] flex justify-center items-center gap-[8px] rounded-[80px] p-[8px] hover:bg-white/5 hover:shadow-lg hover:shadow-[#00000040] hover:backdrop-blur-[20px] cursor-pointer">
                <span className="w-[22px] h-[22px] rounded-full bg-[#84764C]"></span>
                <span className="text-[14px]  font-[400] leading-[17.52px]">Investment Opportunities</span>
            </div>
        </div>

        <div className="border-b border-[#303030] ml-4 pt-20"></div>

        <div className="flex justify-between items-center p-4 pt-6">
            <div className="flex gap-2 pl-5 items-center">
                <Image src="/icons/Token.png" alt="fav" width={20} height={21} />
                <span className="text-[14px]  font-[500] leading-[17.52px] text-[#FFFFFF]">Tokens</span>
            </div>
            <span className="text-[14px]  font-[500] leading-[20px] text-[#FFFFFF]">1/3</span>
        </div>
        
        <div className="relative w-[80%] bg-[#F3F4F6] rounded-full h-2 mx-9">
            {/* Progress bar */}
            <div className="bg-[#C02A7F] h-2 rounded-full transition-all duration-300" style={{ width: `${50}%` }}>
            </div>
        </div>
        <div className="flex justify-center items-center pt-3 pl-5 cursor-pointer">
            <Image src="/icons/Button.svg" alt="fav" width={210} height={45} />
        </div>
        <div className="flex flex-col space-y-2 gap-1 mt-2 items-start w-full pl-6">
            <div className="w-full flex justify-between items-center p-2 pr-3 hover:bg-white/5 rounded-[5px] cursor-pointer">
                <div className="flex justify-center items-center gap-2">
                    <Image src="/icons/Wallet.png" alt="menu" width={20} height={20} />
                    <span className="text-[14px]  font-[500] leading-[20px] text-[#FFFFFF]">Subscription</span>
                </div>
                <div className="flex">
                    <Image src="/icons/ArrowUp.png" alt="menu" width={20} height={20} />
                </div>
            </div>
            <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-white hover:bg-white/5 pr-[150px] ml-1 gap-2 cursor-pointer"
            >
            <Image src="/icons/Setting.png" alt="menu" width={20} height={20} />
                Settings
            </Button>
            <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-white hover:bg-white/5 pr-[150px] ml-1 gap-2 cursor-pointer"
            >
            <Image src="/icons/Logout.svg" alt="menu" width={20} height={20} />
                Log out
            </Button>
        </div>
    </div>
  );
}
export default Sidebar;
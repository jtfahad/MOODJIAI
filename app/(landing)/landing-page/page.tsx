// Main Landing Page Component
'use client';
import React from 'react';
import Navigation from './components/layout/Navigation';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import ProofSection from './components/sections/ProofSection';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-screen min-h-screen w-full">
      {/* Hero Container */}
      <div
        className="min-h-screen w-full"
        style={{
          backgroundImage: "url('/backgroundImages/hero-bg.svg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Navigation />
        <HeroSection />
      </div>

      <div 
      className="min-h-screen w-full pb-8 relative"
        style={{
          backgroundImage: "url('/backgroundImages/landing-feature-bg.svg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {/* Features Section */}
        <FeaturesSection />
        {/* Proof Section */}
          <ProofSection />
          {/* Testimonials Section */}
          <div className="flex flex-col items-center justify-center w-full h-full">

            <div className='flex items-center justify-center mt-8 mb-8'>
              <p className='text-[45px] leading-[120%] tracking-[0.41px] font-[500] text-[#984A2E]'>What our users say</p>
            </div>

            <div className='flex items-center justify-center mb-8 gap-5'>
              <div className="w-[420px] h-[323px] flex flex-col p-6 rounded-[30px] bg-[#FFFFFF]/60 backdrop-blur-[40px] border border-[#FFFFFF]/20">
              <div className="flex mb-12">
                <Image
                  src="/icons/QuoteMark.svg"
                  alt="Quote Mark"
                  width={21}
                  height={18}
                />
              </div>
              <div className='flex'>
                <p className='text-start text-[18px] leading-[150%] tracking-[-2%] font-[500] text-[#22282B]'>“Vehicula id eget in in id vestibulum massa facilisi. Malesuada quisque at nisl, egestas maecenas. In aliquet sollicitudin. Sit imperdiet nulla enim nec, et nunc.”</p>
              </div>
              <div className='flex gap-4 mt-6'>
                <div className='flex gap-4'>
                  <Image
                    src="/logos/testimonial1.svg"
                    alt="Testimonial 1"
                    width={62}
                    height={62}
                    className="rounded-full"
                  />
                </div>
                <div className='flex flex-col items-start justify-center '>
                  <p className='text-[21px] leading-[130%] tracking-[-2%] font-[500] text-[#22282B]'>Devon Lane</p>
                  <p className='text-[18px] leading-[150%] tracking-[-2%] font-[500] text-[#909DA2]'>Art Director</p>
                </div>
              </div>
            </div>
            <div className="w-[420px] h-[323px] flex flex-col p-6 rounded-[30px] bg-[#FFFFFF]/60 backdrop-blur-[40px] border border-[#FFFFFF]/20 ">
              <div className="flex mb-12">
                <Image
                  src="/icons/QuoteMark.svg"
                  alt="Quote Mark"
                  width={21}
                  height={18}
                />
              </div>
              <div className='flex'>
                <p className='text-start text-[18px] leading-[150%] tracking-[-2%] font-[500] text-[#22282B]'>“Vehicula id eget in in id vestibulum massa facilisi. Malesuada quisque at nisl, egestas maecenas. In aliquet sollicitudin. Sit imperdiet nulla enim nec, et nunc.”</p>
              </div>
              <div className='flex gap-4 mt-6'>
                <div className='flex gap-4'>
                  <Image
                    src="/logos/testimonial2.svg"
                    alt="Testimonial 2"
                    width={62}
                    height={62}
                    className="rounded-full"
                  />
                </div>
                <div className='flex flex-col items-start justify-center '>
                  <p className='text-[21px] leading-[130%] tracking-[-2%] font-[500] text-[#22282B]'>Annette Black</p>
                  <p className='text-[18px] leading-[150%] tracking-[-2%] font-[500] text-[#909DA2]'>Art Director</p>
                </div>
              </div>
            </div>
            <div className="w-[420px] h-[323px] flex flex-col p-6 rounded-[30px] bg-[#FFFFFF]/60 backdrop-blur-[40px] border border-[#FFFFFF]/20">
              <div className="flex mb-12">
                <Image
                  src="/icons/QuoteMark.svg"
                  alt="Quote Mark"
                  width={21}
                  height={18}
                />
              </div>
              <div className='flex'>
                <p className='text-start text-[18px] leading-[150%] tracking-[-2%] font-[500] text-[#22282B]'>“Vehicula id eget in in id vestibulum massa facilisi. Malesuada quisque at nisl, egestas maecenas. In aliquet sollicitudin. Sit imperdiet nulla enim nec, et nunc.”</p>
              </div>
              <div className='flex gap-4 mt-6'>
                <div className='flex gap-4'>
                  <Image
                    src="/logos/testimonial3.svg"
                    alt="Testimonial 3"
                    width={62}
                    height={62}
                    className="rounded-full"
                  />
                </div>
                <div className='flex flex-col items-start justify-center '>
                  <p className='text-[21px] leading-[130%] tracking-[-2%] font-[500] text-[#22282B]'>Albert Flores</p>
                  <p className='text-[18px] leading-[150%] tracking-[-2%] font-[500] text-[#909DA2]'>Art Director</p>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className='absolute bottom-0 w-full h-[80px] bg-gradient-to-t from-white/30 to-transparent'>

          </div>
      </div>

      {/* Manifestation partners */}
      <div className="relative">
        <div
          className="min-h-screen w-full pb-8 relative"
          style={{
            backgroundImage: "url('/backgroundImages/landing-manifestation-bg.png')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className='absolute top-0 w-full h-[80px] bg-gradient-to-b from-white/30 to-transparent'></div>
          {/* This inner div needs to be counter-transformed */}
          <div className='flex flex-col items-center mb-20'>
            <div className="flex flex-col items-center justify-center w-full h-full pt-24">

            <div className="flex flex-col items-center justify-center w-full h-full text-center gap-3 mb-14">
              <p className="text-[45px] leading-[120%] tracking-[0.41px] font-[500] text-[#984A2E]">Ask MoodJi</p>
              <p className="text-[45px] leading-[120%] tracking-[0.41px] font-[500] text-[#984A2E]">Your Manifestation Partner</p>
              <p className="text-[18px] leading-[160%] font-[400] text-[#000000]">Share your feelings. Feel seen. Activate your next creation.</p>
            </div>

            <div className="flex justify-center w-[80%] h-[700px] bg-[#FFFFFF]/60 backdrop-blur-[40px] border-[2.44px] border-[#FFFFFF]/20 rounded-[20px]">
              <div className='flex flex-col w-[80%] h-[144px] gap-3 mt-24'>
                <p className='w-full flex justify-end text-[18px] leading-[150%] tracking-[-2%] font-[500] text-[#22282B]'>What does wealth feel like in your body when you&apos;re not thinking about money?</p>
                <p className='flex items-end text-[18px] leading-[150%] tracking-[-2%] font-[500] text-[#22282B] mt-20'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p className='flex items-end text-[18px] leading-[150%] tracking-[-2%] font-[500] text-[#22282B] mt-10'>Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                <div className='flex justify-start items-center gap-2 mt-2'>
                  <Image
                    src="/icons/Copy.svg"
                    alt="Manifestation Partner"
                    width={24}
                    height={24}
                    className='cursor-pointer'
                  />
                  <Image
                    src="/icons/ThumbsUp.svg"
                    alt="Manifestation Partner"
                    width={24}
                    height={24}
                    className='cursor-pointer'
                  />
                  <Image
                    src="/icons/ThumbsDown.svg"
                    alt="Manifestation Partner"
                    width={24}
                    height={24}
                    className='cursor-pointer'
                  />
                  <Image
                    src="/icons/Repeat.svg"
                    alt="Manifestation Partner"
                    width={24}
                    height={24}
                    className='cursor-pointer'
                  />
                </div>
                <p className='w-full flex justify-end text-[18px] leading-[150%] tracking-[-2%] font-[500] text-[#22282B] mt-10'>What sound or music frequency instantly puts you into power?</p>
                <div className='flex w-full justify-center mt-20'>
                  <div className='flex items-center pl-4 h-[50px] gap-2 w-[90%] bg-[#FFFFFF]/60 backdrop-blur-[40px] rounded-[30px]'>
                    <Image
                      src="/icons/AddNew.svg"
                      alt="Send"
                      width={20}
                      height={20}
                      className='cursor-pointer'
                    />
                    <p className='text-[12px] leading-[16.24px] font-[400] text-[#000000]'>Ask Anything</p>
                  </div>
                </div>
              </div>
              
            </div>

            <div className="flex justify-center items-center mt-10 w-full p-2">
              <button className='w-[300px] h-[48px] rounded-[16px] bg-gradient-to-r from-[#CD7D60] to-[#984A2E] text-[#FFFFFF] text-[14px] fonnt-[700] leading-[160%] tracking-[0.2px]'>
                Activate Selura
              </button>
            </div>
          </div>
         
          </div>

          {/* Comparison Chart */}
          <div className="relative px-4 py-16 text-center bg-[#FFFFFF]/60">
            {/* Dragon Image Fixed to Parent */}
            <Image
              src="/dragons/ComparisonChartDragon.svg"
              alt="Dragon"
              width={594}
              height={367}
              className="absolute top-[-130px] right-0 w-[400px] pointer-events-none z-10"
            />

            {/* Header */}
            <div className="relative z-20 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#944c26]">Comparison chart</h2>
              <p className="text-gray-600 mt-2 text-base md:text-lg">Find the tier that matches your needs</p>
            </div>

            {/* Comparison Table */}
            <div className="relative z-20 overflow-x-auto max-w-5xl mx-auto rounded-xl">
              <table className="min-w-full table-fixed border-collapse">
                <thead className=" text-[#7b3e22] text-sm md:text-base">
                  <tr>
                    <th className="p-4 font-semibold text-center"> </th>
                    <th className="p-4 font-semibold"><Image src="/logos/moodjiverse-logo.svg" alt="Moodjiverse" width={167} height={18} /></th>
                    <th className="p-4 font-semibold"><Image src="/logos/ChatGPT.svg" alt="ChatGPT" width={109} height={32} /></th>
                    <th className="p-4 font-semibold"><Image src="/logos/Claude.svg" alt="Claude" width={109} height={24} /></th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 text-sm md:text-base">
                  <tr className="border-[2.44px] border-[#FFFFFF]/20 bg-[#FFFFFF]/60 rounded-[30px]">
                    <td className="p-4 text-left">Architecture</td>
                    <td className="p-4 pl-20"><Image src="/icons/CheckCircle.svg" alt="Check Circle" width={24} height={24} /></td>
                    <td className="p-4 pl-12"><Image src="/icons/CheckCircle.svg" alt="Check Circle" width={24} height={24} /></td>
                    <td className="p-4 pl-16"><Image src="/icons/CheckCircle.svg" alt="Check Circle" width={24} height={24} /></td>
                  </tr>
                  <tr className="">
                    <td className="p-4 text-left">User Base</td>
                    <td className="p-4 pl-20"><Image src="/icons/CheckCircle.svg" alt="Check Circle" width={24} height={24} /></td>
                    <td className="p-4 pl-12"><Image src="/icons/CheckCircle.svg" alt="Check Circle" width={24} height={24} /></td>
                    <td className="p-4 pl-16"><Image src="/icons/CheckCircle.svg" alt="Check Circle" width={24} height={24} /></td>
                  </tr>
                  <tr className="border-[2.44px] border-[#FFFFFF]/20 bg-[#FFFFFF]/60 rounded-[30px]">
                    <td className="p-4 text-left">Integrations</td>
                    <td className="p-4 pl-20"><Image src="/icons/CheckCircle.svg" alt="Check Circle" width={24} height={24} /></td>
                    <td className="p-4 pl-12"><Image src="/icons/CheckCircle.svg" alt="Check Circle" width={24} height={24} /></td>
                    <td className="p-4 pl-16"><Image src="/icons/CancelCircle.svg" alt="Cancel Circle" width={24} height={24} /></td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 text-left">Primary Strength</td>
                    <td className="p-4 pl-20"><Image src="/icons/CheckCircle.svg" alt="Check Circle" width={24} height={24} /></td>
                    <td className="p-4 pl-12"><Image src="/icons/CancelCircle.svg" alt="Cancel Circle" width={24} height={24} /></td>
                    <td className="p-4 pl-16"><Image src="/icons/CancelCircle.svg" alt="Cancel Circle" width={24} height={24} /></td>
                  </tr>
                  <tr className="border-[2.44px] border-[#FFFFFF]/20 bg-[#FFFFFF]/60 rounded-[30px]">
                    <td className="p-4 text-left">Accuracy</td>
                    <td className="p-4 pl-20"><Image src="/icons/CheckCircle.svg" alt="Check Circle" width={24} height={24} /></td>
                    <td className="p-4 pl-12"><Image src="/icons/CancelCircle.svg" alt="Cancel Circle" width={24} height={24} /></td>
                    <td className="p-4 pl-16"><Image src="/icons/CancelCircle.svg" alt="Cancel Circle" width={24} height={24} /></td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 text-left">Accuracy</td>
                    <td className="p-4 pl-20"><Image src="/icons/CheckCircle.svg" alt="Check Circle" width={24} height={24} /></td>
                    <td className="p-4 pl-12"><Image src="/icons/CancelCircle.svg" alt="Cancel Circle" width={24} height={24} /></td>
                    <td className="p-4 pl-16"><Image src="/icons/CancelCircle.svg" alt="Cancel Circle" width={24} height={24} /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Call to Action Button */}
            <div className="flex justify-center items-center mt-10 w-full p-2">
              <button className='w-[204px] h-[48px] rounded-[16px] bg-gradient-to-r from-[#CD7D60] to-[#984A2E] text-[#FFFFFF] text-[14px] fonnt-[700] leading-[160%] tracking-[0.2px]'>
                Get Started
              </button>
            </div>
          </div>
        
          {/* <div className='w-full h-[804px] flex flex-col items-center bg-[#FFFFFF]/60'>
            <div className='w-full flex flex-col items-center justify-center mt-10'>
              <p className='text-[45px] leading-[160%] font-[500] text-[#984A2E] tracking-[0.41px]'>Comparison chart</p>
              <p className='text-[18px] leading-[160%] font-[400] text-[#000000]'>Find the tier that matches your needs</p>
            </div>
            <div className='w-[70%] h-[381px] mt-10 bg-red-200'>
              <div className='w-[70%] flex flex-end items-center justify-between  bg-blue-200 mr-24'>
                <div className='flex ml-24'>
                  <Image
                    src="/logos/moodjiverse.svg"
                    alt="moodjiverse"
                    width={167}
                    height={18}
                    className=""
                />
                </div>
                <div className='flex'>
                  <Image
                    src="/logos/ChatGPT.svg"
                    alt="ChatGPT"
                    width={109}
                    height={32}
                    className=""
                />
                </div>
                <div className='flex'>
                  <Image
                    src="/logos/Claude.svg"
                    alt="Claude"
                    width={109}
                    height={24}
                    className=""
                />
                </div>

              </div>

              <div className='flex w-full rounded-[20px] '>

              </div>

            </div>

          </div> */}
        </div>
      </div>

    </div>
  );
};

export default LandingPage;
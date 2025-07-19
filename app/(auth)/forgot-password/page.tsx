'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ForgotPasswordPage: React.FC = () => {
    const router = useRouter();
    const handleSubmit = () => {
        console.log('Form submitted');
        // Handle form submission logic here
        router.push('/forgot-password/verify-otp'); 
    }
  return (
    <div className="flex h-screen flex-col items-center justify-between bg-[#FFFFFF] py-10">
    <div className="flex flex-col items-center mb-8">
      <Image
        src="/logos/moodjiverse.svg"
        alt="Forgot Password"
        width={226}
        height={26}
        className="mb-6"
        style={{ filter: 'invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)' }}
      />
    </div>
    <div className='flex flex-col items-center text-center'>
      <div className="flex flex-col mb-12">
        <h1 className="text-[#111827]/90 font-[700] text-[32px] leading-[125%] mb-3">Reset your password</h1>
        <p className="text-[#111827]/90 font-[400] text-[18px] leading-[150%]">Enter your email address and we’ll send you password</p>
        <p className='text-[#111827]/90 font-[400] text-[18px] leading-[150%]'>reset instructions.</p>
      </div>
      <form className="flex flex-col w-full">
        <div className='flex flex-col mb-8'>
            <label htmlFor="email" className="mb-2 text-left text-[#111827]/90 font-[500] text-[14px] leading-[160%]">Registered Email<span className="text-red-500 ml-1">*</span></label>
            <input
            type="email"
            placeholder="Input your registered email"
            required
            className="border border-gray-300 p-2 rounded mb-4 w-full placeholder:text-[#A0AEC0] placeholder:text-[14px] placeholder:leading-[160%] focus:ring-2 focus:outline-none focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-gray-800"
            />
        </div>
        <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-[#111827] text-white p-3 rounded-[15px] font-[500] text-[20px] shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200 transform hover:-translate-y-0.5"
        >
            Submit
        </button>
      </form>
    </div>
    {/* Footer */}
    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-center sm:text-left text-xs text-gray-500 border-t pt-6 mt-8">
        <div className="mb-2 sm:mb-0">
            &copy; {new Date().getFullYear()} Moodji . All rights reserved.
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-[#111827] leading-[160%] font-[500]">
            <span className="hover:underline cursor-pointer">Terms & Conditions</span>
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
        </div>
    </div>
    </div>
  );
}

export default ForgotPasswordPage;
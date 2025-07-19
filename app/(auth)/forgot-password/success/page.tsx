'use client';

import React from 'react';
import Image from 'next/image'; 
import { useRouter } from 'next/navigation';


const UpdateSuccessPage: React.FC = () => {
    const router = useRouter();
    
    const handleBackToLogin = () => {
        router.push('/login'); // Adjust the path as needed
    };
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-white py-10">
      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/logos/moodjiverse.svg"
          alt="Moodji Logo"
          width={226}
          height={26}
          className="mb-6"
          style={{ filter: 'invert(0%) brightness(0%) contrast(100%)' }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center w-full max-w-lg">
        <Image
          src="/icons/SuccessTick.svg"
          alt="Success"
          width={265}
          height={140}
          className="mb-10"
        />

        <div className="flex flex-col items-center mb-10">
            <h1 className="text-[#111827] text-[32px] font-[700] leading-[125%] mb-2">Your successfully changed</h1>
        <p className="text-[#111827] text-[32px] font-[700] leading-[125%] mb-10">your password!</p>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          onClick={handleBackToLogin}
          className="w-[90%] bg-[#111827] text-white p-3 rounded-[15px] font-medium text-[18px] shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-transform hover:-translate-y-0.5"
        >
          Back to Login
        </button>
      </div>

      {/* Footer */}
      <footer className="w-[40%] text-xs text-gray-500 pt-6 mt-12 flex flex-col sm:flex-row gap-3 justify-center items-center text-center sm:text-left">
        <span>&copy; {new Date().getFullYear()} Moodji. All rights reserved.</span>
        <div className="flex gap-4 text-[#111827] font-medium">
          <span className="hover:underline cursor-pointer">Terms & Conditions</span>
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
        </div>
      </footer>
    </div>
  );
};

export default UpdateSuccessPage;

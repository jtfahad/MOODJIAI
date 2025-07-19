'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const OTPVerificationPage: React.FC = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle OTP submission logic here
    console.log('OTP submitted');
    // Redirect to a success page or show a success message
    router.push('/forgot-password/update'); // Uncomment if you have a success page
  }
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
        <h1 className="text-[32px] font-bold leading-[125%] mb-6">OTP Verification</h1>
        
        <div className="mb-10">
          <p className="text-gray-800/90 font-normal text-[18px] leading-[150%]">
            We have sent a verification code to your email address
          </p>
          <p className="text-gray-800/90 font-[500] text-[18px] leading-[150%]">
            David@gmail.com.{' '}
            <span className="text-[#27A376] font-medium cursor-pointer hover:underline">
              Wrong Email?
            </span>
          </p>
        </div>

        {/* OTP Input */}
        <div className="flex gap-3 justify-center mb-6">
          {[0, 1, 2, 3].map((i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              className="w-24 h-14 text-center text-lg border border-gray-300 rounded-lg outline-none focus:border-[#0CAF60] focus:ring-1 focus:ring-[#0CAF60] transition-all"
            />
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-[90%] bg-[#111827] text-white p-3 rounded-[15px] font-medium text-[18px] shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-transform hover:-translate-y-0.5"
        >
          Submit
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

export default OTPVerificationPage;

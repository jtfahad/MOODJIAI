'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Invalid email address.';
    }

    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Submitted:', { email, password });
      // Proceed with login
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  const handleAppleLogin = () => {
    console.log('Apple login clicked');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#FFFFFF]">
      <div className="relative w-1/2 flex items-center justify-center">
        <Image
          src="/backgroundImages/login-left-logo.svg"
          alt="Fantasy Dragon"
          className="w-full h-full object-contain rounded-3xl p-4"
          fill
        />
      </div>

      <div className="h-screen flex flex-1 items-center justify-center">
        <form onSubmit={handleSubmit} className="flex justify-between flex-col h-[80%] w-[70%]">
          <div className="flex justify-center">
            <p className="text-[24px] md:text-3xl font-[700] text-gray-800 leading-[130%]">Sign in</p>
          </div>

          <div className="flex flex-col gap-6 mb-6">
            {/* Email Input */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">
                Email Address<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                placeholder="Email"
              />
              {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
            </div>

            {/* Password Input */}
            <div className="flex flex-col relative">
              <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-2">
                Password<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                placeholder="Password"
              />
              <Image
                src={showPassword ? '/icons/ShowEye.svg' : '/icons/HideEye.svg'}
                alt="Toggle Password Visibility"
                width={20}
                height={20}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[66%] translate-y-[-50%] cursor-pointer"
              />
              {errors.password && <span className="text-red-500 text-sm mt-1">{errors.password}</span>}
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" className="h-4 w-4 accent-black text-gray-600 focus:ring-gray-500 border-gray-100 rounded" />
                <label htmlFor="remember" className="text-[14px] font-[400] text-[#687588]">Remember me</label>
              </div>
              <span className="text-[14px] text-[#687588] hover:underline leading-[160%] cursor-pointer">Forgot Password?</span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#111827] text-white p-3 rounded-lg font-semibold text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Login
            </button>

            {/* Signup CTA */}
            <div className="text-start text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <span className="text-yellow-400 font-semibold hover:underline transition-colors duration-200 cursor-pointer">
                Sign Up
              </span>
            </div>

            {/* Divider */}
            <div className="flex justify-center items-center mt-2">
              <div className="w-full border-b border-1 border-[#F1F2F4]"></div>
              <div className="text-center text-[14px] text-[#687588] my-4 whitespace-nowrap px-2 leading-[160%]">Or login with</div>
              <div className="w-full border-b border-1 border-[#F1F2F4]"></div>
            </div>

            {/* Social Logins */}
            <div className="flex justify-center items-center gap-4 mt-2">
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="flex w-full h-[56px] justify-center items-center gap-2 border-[1px] border-[#E9EAEC] p-3 rounded-[12px] shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <Image src="/icons/Google.svg" alt="Google" width={22} height={22} />
                <span className="text-[#111827] font-[500] text-[16px] leading-[150%]">Google</span>
              </button>
              <button
                type="button"
                onClick={handleAppleLogin}
                className="flex w-full h-[56px] justify-center items-center gap-2 border-[1px] border-[#E9EAEC] p-3 rounded-[12px] shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <Image src="/icons/Apple.svg" alt="Apple" width={20} height={22} />
                <span className="text-gray-800">Apple</span>
              </button>
            </div>
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
        </form>
      </div>
    </div>
  );
}

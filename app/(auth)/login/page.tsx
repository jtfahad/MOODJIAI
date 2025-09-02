'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const router = useRouter();

  const handleSignUp = () => {
    router.push('/signup');
  };

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

  const handleForgotPassword = () => {
    router.push('/forgot-password');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Submitted:', { email, password });
      setEmail('');
      setPassword('');
      setErrors({});
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  const handleAppleLogin = () => {
    console.log('Apple login clicked');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-no-repeat bg-cover bg-center border-[6px] border-[#D6CDF5]"
      style={{ backgroundImage: 'url("/backgroundImages/login.png")', backgroundColor: '#F8F9FA' }}
    >
      <div className="hidden md:flex absolute inset-0 opacity-40"></div>

      <div className="flex flex-col items-center z-10 w-full px-4 sm:px-6 md:px-8">
        {/* Logo at the top center */}
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/logos/moodjiverse.svg"
            alt="Moodjiverse Logo"
            width={226}
            height={26}
            className="mb-6"
            style={{ filter: 'invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)' }}
          />
        </div>

        <div className="w-full max-w-[676px] h-auto max-h-[681px] bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex justify-center mb-6">
              <p className="text-3xl font-bold text-gray-800">Sign in</p>
            </div>

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
                className="absolute right-4 top-1/2 mt-4 translate-y-[-50%] cursor-pointer"
              />
              {errors.password && <span className="text-red-500 text-sm mt-1">{errors.password}</span>}
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" className="h-4 w-4 accent-black text-gray-600 focus:ring-gray-500 border-gray-100 rounded" />
                <label htmlFor="remember" className="text-sm font-normal text-gray-600">Remember me</label>
              </div>
              <span className="text-sm text-gray-600 hover:underline cursor-pointer" onClick={handleForgotPassword}>Forgot Password?</span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#111827] text-white p-3 rounded-lg font-semibold text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200 transform hover:-translate-y-0.5 mt-4"
            >
              Login
            </button>

            {/* Signup CTA */}
            <div className="text-center text-sm text-gray-600 mt-4">
              Don&apos;t have an account?{' '}
              <span className="text-yellow-400 font-semibold hover:underline transition-colors duration-200 cursor-pointer"
                onClick={handleSignUp}>
                Sign Up
              </span>
            </div>

            {/* Divider */}
            <div className="flex justify-center items-center my-6">
              <div className="flex-grow border-b border-gray-200"></div>
              <div className="text-center text-sm text-gray-500 px-2">Or login with</div>
              <div className="flex-grow border-b border-gray-200"></div>
            </div>

            {/* Social Logins */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="flex-1 flex justify-center items-center gap-2 border border-gray-300 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <Image src="/icons/Google.svg" alt="Google" width={22} height={22} />
                <span className="text-gray-800 font-medium">Google</span>
              </button>
              <button
                type="button"
                onClick={handleAppleLogin}
                className="flex-1 flex justify-center items-center gap-2 border border-gray-300 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <Image src="/icons/Apple.svg" alt="Apple" width={20} height={22} />
                <span className="text-gray-800 font-medium">Apple</span>
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-8">
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-center sm:text-left text-xs text-gray-500 border-t pt-6 mt-8">
            <div className="mb-2 sm:mb-0">
              &copy; {new Date().getFullYear()} Moodji . All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-[#111827] leading-[160%] font-[500]">
              <Link href="/terms-of-use" passHref>
                <span className="hover:underline cursor-pointer">Terms & Conditions</span>
              </Link>
              <Link href="#privacy-policy" passHref>
                <span className="hover:underline cursor-pointer">Privacy Policy</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
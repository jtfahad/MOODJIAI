'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    day: '',
    month: '',
    year: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: '' });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = 'Required';
      }
    });
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Submitted Data:', formData);
      router.push('/login');
    }
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

        <div className="w-full max-w-[676px] bg-white p-8 rounded-xl shadow-lg border border-gray-200 flex flex-col">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 overflow-y-auto custom-scrollbar md:overflow-hidden md:h-auto">
            <div className="flex justify-center mb-6">
              <p className="text-3xl font-bold text-gray-800">Sign Up</p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <div className="flex w-full flex-col">
                  <label htmlFor="firstname" className="text-sm font-medium text-gray-700 mb-2">First Name<span className="text-red-500 ml-1">*</span></label>
                  <input
                    type="text"
                    id="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                    placeholder="Full Name"
                  />
                  {errors.firstname && <span className="text-xs text-red-500 mt-1">{errors.firstname}</span>}
                </div>
                <div className="flex w-full flex-col">
                  <label htmlFor="lastname" className="text-sm font-medium text-gray-700 mb-2">Last Name<span className="text-red-500 ml-1">*</span></label>
                  <input
                    type="text"
                    id="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                    placeholder="Last Name"
                  />
                  {errors.lastname && <span className="text-xs text-red-500 mt-1">{errors.lastname}</span>}
                </div>
              </div>

              <div className="flex w-full flex-col">
                <label htmlFor="username" className="text-sm font-medium text-gray-700 mb-2">Username<span className="text-red-500 ml-1">*</span></label>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                  placeholder="Username"
                />
                {errors.username && <span className="text-xs text-red-500 mt-1">{errors.username}</span>}
              </div>

              <div className="flex flex-col gap-1 w-full">
                <label className="text-sm font-medium text-gray-700 mb-2">Date of Birth<span className="text-red-500 ml-1">*</span></label>
                <div className="flex w-full gap-3">
                  {['day', 'month', 'year'].map((field) => (
                    <div key={field} className="w-full">
                      <input
                        type="text"
                        id={field}
                        value={(formData as any)[field]}
                        onChange={handleChange}
                        className="w-full h-[54px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      />
                      {errors[field] && <span className="text-xs text-red-500 mt-1">{errors[field]}</span>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <div className="flex w-full flex-col">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2">Phone Number<span className="text-red-500 ml-1">*</span></label>
                  <input
                    type="text"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                    placeholder="Phone"
                  />
                  {errors.phone && <span className="text-xs text-red-500 mt-1">{errors.phone}</span>}
                </div>
                <div className="flex w-full flex-col">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">Your Email<span className="text-red-500 ml-1">*</span></label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                    placeholder="Email"
                  />
                  {errors.email && <span className="text-xs text-red-500 mt-1">{errors.email}</span>}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row w-full gap-3">
                <div className="flex w-full flex-col relative">
                  <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-2">Password<span className="text-red-500 ml-1">*</span></label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                    placeholder="Password"
                  />
                  <Image
                    src={showPassword ? "/icons/ShowEye.svg" : "/icons/HideEye.svg"}
                    alt="Toggle Password Visibility"
                    width={20}
                    height={20}
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-4 translate-y-[-50%] cursor-pointer ${errors.password ? 'top-[54%]' : 'top-[66%]'}`}
                  />
                  {errors.password && <span className="text-xs text-red-500 mt-1">{errors.password}</span>}
                </div>

                <div className="flex w-full flex-col relative">
                  <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 mb-2">Confirm Password<span className="text-red-500 ml-1">*</span></label>
                  <input
                    type={showConfirm ? 'text' : 'password'}
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-gray-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                    placeholder="Confirm Password"
                  />
                  <Image
                    src={showConfirm ? "/icons/ShowEye.svg" : "/icons/HideEye.svg"}
                    alt="Toggle Confirm Password Visibility"
                    width={20}
                    height={20}
                    onClick={() => setShowConfirm(!showConfirm)}
                    className={`absolute right-4 translate-y-[-50%] cursor-pointer ${errors.confirmPassword ? 'top-[54%]' : 'top-[66%]'}`}
                  />
                  {errors.confirmPassword && <span className="text-xs text-red-500 mt-1">{errors.confirmPassword}</span>}
                </div>
              </div>
            </div>

            <div className="flex items-center mt-2">
              <input type="checkbox" id="terms" className="h-4 w-4 accent-black text-gray-600 focus:ring-gray-500 border-gray-300 rounded" />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I confirm that I have read and agree to the
                <Link href="/terms-of-use" passHref>
                  <span className="text-yellow-400 ml-1 font-semibold hover:underline cursor-pointer">Terms & Conditions</span>
                </Link>
              </label>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-[#111827] text-white p-3 rounded-lg font-semibold text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200 transform hover:-translate-y-0.5 mt-4"
            >
              Sign Up
            </button>
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
              <span className="hover:underline cursor-pointer">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
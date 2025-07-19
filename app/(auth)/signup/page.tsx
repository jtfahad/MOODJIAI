'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
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
      router.push('/login'); // Redirect to success page
      // perform API call here
    }
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
        <form
          onSubmit={handleSubmit}
          className="flex justify-between flex-col h-[80%] w-[70%]"
        >
          <div className="flex justify-center mb-10">
            <p className="text-[24px] font-[700] text-gray-800 leading-[130%]">Sign Up</p>
          </div>
          <div className="flex justify-center mb-4">
            <p className="text-[32px] font-[500] text-gray-800 leading-[130%]">Let&apos;s get started with your sign-up.</p>
          </div>

          <div className="flex flex-col gap-6 mb-6">
            <div className="flex gap-3 w-full mb-4">
              <div className="flex h-[54px] w-full flex-col">
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
              <div className="flex h-[54px] w-full flex-col">
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

            <div className="flex h-[54px] w-full flex-col mb-4">
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

            <div className="flex flex-col gap-1 w-full mb-2">
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

            <div className="flex gap-3 w-full mb-4">
              <div className="flex h-[54px] w-full flex-col">
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
              <div className="flex h-[54px] w-full flex-col">
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

            <div className="flex w-full gap-3">
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

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-[#111827] text-white p-3 rounded-lg font-semibold text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Sign In
            </button>
          </div>

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

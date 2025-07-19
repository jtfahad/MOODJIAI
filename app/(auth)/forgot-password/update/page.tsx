'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const UpdatePasswordPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({ password: '', confirmPassword: '' });
  const [errors, setErrors] = useState<{ password?: string; confirmPassword?: string }>({});
  const router = useRouter();
  const passwordRules = {
    length: (val: string) => val.length >= 8,
    number: (val: string) => /\d/.test(val),
    upper: (val: string) => /[A-Z]/.test(val),
    lower: (val: string) => /[a-z]/.test(val),
  };

  const ruleList = [
    { label: 'Minimum 8 characters', check: passwordRules.length },
    { label: 'Number (0–9)', check: passwordRules.number },
    { label: 'Upper Case Letter (A–Z)', check: passwordRules.upper },
    { label: 'Lower Case Letter (a–z)', check: passwordRules.lower },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    // Clear confirm password mismatch error live
    if (id === 'confirmPassword' && value === formData.password) {
      setErrors((prev) => ({ ...prev, confirmPassword: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;
    const newErrors: typeof errors = {};

    if (!password) {
      newErrors.password = 'Password is required.';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // ✅ All good – handle form submission
      console.log('Form submitted:', formData);
      //clear form
      setFormData({ password: '', confirmPassword: '' });
      setShowPassword(false);
      setShowConfirm(false);
      setErrors({});
      router.push('/forgot-password/success'); // Uncomment if you have a success page

    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-white py-10 px-4">
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
      <div className="flex flex-col items-center w-full max-w-xl text-center">
        <h1 className="text-[32px] font-bold mb-4">Update your password</h1>
        <p className="text-gray-700 text-[18px] leading-[150%] mb-1">
          Set your new password with minimum 8 characters
        </p>
        <p className="text-gray-700 text-[18px] leading-[150%] font-medium mb-10">
          with a combination of letters and numbers
        </p>

        <form className="w-full flex flex-col gap-8" onSubmit={handleSubmit}>
          {/* Password */}
          <div className="relative ">
            <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-2 flex items-start">
              New Password<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="New Password"
              className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-gray-500 transition-all text-gray-800 placeholder-gray-400"
            />
            <Image
              src={showPassword ? "/icons/ShowEye.svg" : "/icons/HideEye.svg"}
              alt="Toggle Password"
              width={20}
              height={20}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[43px] cursor-pointer"
            />
            {errors.password && <p className="flex items-start text-xs text-red-500 mt-1">{errors.password}</p>}
          </div>

          {/* Password Rules */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {ruleList.map((rule, index) => {
              const passed = rule.check(formData.password);
              return (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <Image
                    src={passed ? "/icons/TickCircle.svg" : "/icons/CloseCircle.svg"}
                    alt={passed ? "Valid" : "Invalid"}
                    width={20}
                    height={20}
                  />
                  <span>{rule.label}</span>
                </div>
              );
            })}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 mb-2 flex items-start">
              Confirm Password<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type={showConfirm ? 'text' : 'password'}
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-type your new password"
              className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-gray-500 transition-all text-gray-800 placeholder-gray-400"
            />
            <Image
              src={showConfirm ? "/icons/ShowEye.svg" : "/icons/HideEye.svg"}
              alt="Toggle Confirm"
              width={20}
              height={20}
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-[43px] cursor-pointer"
            />
            {errors.confirmPassword && (
              <p className="flex items-start text-xs text-red-500 mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#111827] text-white py-3 rounded-[15px] font-medium text-[18px] shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-transform hover:-translate-y-0.5"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-4xl text-xs text-gray-500 pt-6 mt-12 flex flex-col sm:flex-row gap-3 justify-center items-center text-center sm:text-left">
        <span>&copy; {new Date().getFullYear()} Moodji. All rights reserved.</span>
        <div className="flex gap-4 text-[#111827] font-medium">
          <span className="hover:underline cursor-pointer">Terms & Conditions</span>
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
        </div>
      </footer>
    </div>
  );
};

export default UpdatePasswordPage;

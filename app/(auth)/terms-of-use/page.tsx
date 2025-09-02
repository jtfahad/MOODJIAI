'use client';

import Image from 'next/image';
import Link from 'next/link'; // Import the Link component

export default function TermsOfUse() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-no-repeat bg-cover bg-center border-[6px] border-[#D6CDF5]"
      style={{ backgroundImage: 'url("/backgroundImages/login.png")', backgroundColor: '#F8F9FA' }}
    >
      <div className="hidden md:flex absolute inset-0 bg-white opacity-40"></div>

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

        {/* Content Card */}
        <div className="w-full sm:w-auto min-w-0 md:min-w-[1000px] bg-white p-8 rounded-xl shadow-lg border border-gray-200 flex flex-col overflow-y-auto sm:overflow-hidden sm:h-auto">
          <div className="flex justify-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Terms of Use</h1>
          </div>

          <div className="text-gray-700 leading-relaxed mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Who we</h2>
            <p className="mb-4">Our website address is: <a href="https://moodme.co" className="text-yellow-500 hover:underline">https://moodme.co</a>.</p>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Comments</h2>
            <p className="mb-4">
              When visitors leave comments on the site, we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
            </p>
            <p className="mb-4">
              An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: <a href="https://automattic.com/privacy/" className="text-yellow-500 hover:underline">https://automattic.com/privacy/</a>. After approval of your comment, your profile picture is visible to the public in the context of your comment.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Media</h2>
            <p className="mb-4">
              If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Cookies</h2>
            <p className="mb-4">
              If you leave a comment on our site, you may opt-in to saving your name, email address, and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
            </p>
            <p className="mb-4">
              If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
            </p>
            <p className="mb-4">
              When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
            </p>
            <p>
              If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8">
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-center sm:text-left text-xs text-gray-500 border-t pt-6 mt-8">
            <div className="mb-2 sm:mb-0">
              &copy; {new Date().getFullYear()} Moodji . All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-[#111827] leading-[160%] font-[500]">
              {/* Use the Link component for internal navigation */}
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
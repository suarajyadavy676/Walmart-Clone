import React from "react";
import { SiWalmart } from "react-icons/si";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      {/* <!-- component --> */}
      <footer className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            We’d love to hear what you think!
            </h2>
            <div className="flex flex-col mt-6 sm:flex-row sm:items-center sm:justify-center">
              <button className="w-full px-5 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-2xl sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Give feedback
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Product
              </h3>

              <div className="flex flex-col items-start mt-4 space-y-4">
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Overview
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Features
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Solutions
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Tutorials
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Pricing
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Releases
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Company
              </h3>

              <div className="flex flex-col items-start mt-4 space-y-4">
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  About us
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Careers
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Press
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  News
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Media kit
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Resources
              </h3>

              <div className="flex flex-col items-start mt-4 space-y-4">
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Blog
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Newsletter
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Events
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Help center
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Tutorials
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Supports
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Use cases
              </h3>

              <div className="flex flex-col items-start mt-4 space-y-4">
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Startups
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Enterprise
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Government
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Saas
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Marketplaces
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Ecommerce
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Social
              </h3>

              <div className="flex flex-col items-start mt-4 space-y-4">
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Twitter
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  LinkedIn
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Github
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Facebook
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  AngelList
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Dribble
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Legal
              </h3>

              <div className="flex flex-col items-start mt-4 space-y-4">
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Terms
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Privacy
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Cookies
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Licenses
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Settings
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

          <div className="flex flex-col text-white items-center justify-between sm:flex-row">
            <Link to="#">
              <SiWalmart style={{fontSize:"150"}} />
            </Link>
            <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">
              © Copyright 2024. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

import React from "react";
import {
  SlSocialTwitter,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import { RiGithubLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { IoArrowUpCircleOutline } from "react-icons/io5";

const Footer = () => {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">About Blog</h3>
            <p className="text-gray-600 text-sm">
              A tech blog sharing insights about web development, programming
              languages, and software engineering best practices.
            </p>
            <div className="flex space-x-4">
              <SlSocialTwitter className="w-5 h-5 text-gray-600 hover:text-blue-400 cursor-pointer" />
              <SlSocialFacebook className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
              <SlSocialInstagram className="w-5 h-5 text-gray-600 hover:text-pink-500 cursor-pointer" />
              <RiGithubLine className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-gray-600 hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-600 hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/category/web-dev"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="/category/machine-learning"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Machine Learning
                </a>
              </li>
              <li>
                <a
                  href="/category/devops"
                  className="text-gray-600 hover:text-gray-900"
                >
                  DevOps
                </a>
              </li>
              <li>
                <a
                  href="/category/programming"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Programming
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Newsletter</h3>
            <p className="text-gray-600 text-sm">
              Subscribe to our newsletter for weekly updates and tech news.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-opacity-80">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>© 2024 Tech Blog. All rights reserved.</span>
              <CiMail className="w-4 h-4 cursor-pointer" />
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900"
            >
              <span>Back to top</span>
              <IoArrowUpCircleOutline className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

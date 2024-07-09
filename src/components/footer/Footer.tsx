// components/Footer.js
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaMobileAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Medicine</h2>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <p className="text-sm font-bold">Trade License</p>
            <p className="text-sm">TRAD/DNCC/057777/2024</p>
            <p className="text-sm">Others License: 180000</p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-sm hover:underline">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm hover:underline">
                  Terms and Conditions
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm hover:underline">
                  Refund and Return Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-sm hover:underline">
                  Account
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm hover:underline">
                  Best Selling Products
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm hover:underline">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <p className="text-sm mb-2 flex items-center">
              <FaMapMarkerAlt className="mr-2" /> Address: Sirajganj Sadar,
              Sirajganj
            </p>
            <p className="text-sm mb-2 flex items-center">
              <FaPhone className="mr-2" /> Hot Line: 09620000000
            </p>
            <p className="text-sm mb-2 flex items-center">
              <FaMobileAlt className="mr-2" /> Mobile: 01700000000
            </p>
            <p className="text-sm mb-2 flex items-center">
              <FaEnvelope className="mr-2" /> E-mail: medicine@gmail.com
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-gray-300">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaYoutube />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-400 pt-4 text-center">
          <p className="text-sm">©2021-2024 Poonno.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// components/Sidebar.js
"use client";
import { useState } from "react";
import { FaHeart, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Sidebar = () => {
  const [isCommonConditionsOpen, setIsCommonConditionsOpen] = useState(false);

  const toggleCommonConditions = () => {
    setIsCommonConditionsOpen(!isCommonConditionsOpen);
  };

  return (
    <aside className="w-64 p-4 bg-white border-r border-gray-200">
      <div className="mb-4">
        <h2 className="text-lg font-bold flex items-center">
          <FaHeart className="mr-2" /> Favourites
        </h2>
      </div>
      <div>
        <button
          onClick={toggleCommonConditions}
          className="w-full text-left font-bold flex justify-between items-center mb-2"
        >
          <span>Common Conditions</span>
          {isCommonConditionsOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {isCommonConditionsOpen && (
          <div className="pl-4">
            <div className="mb-2">
              <button className="w-full text-left py-1 px-2 rounded hover:bg-gray-100">
                Blood Pressure
              </button>
            </div>
            <div className="mb-2">
              <button className="w-full text-left py-1 px-2 rounded hover:bg-gray-100">
                Heart Disease
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;

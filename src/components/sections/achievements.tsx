"use client";
import React, { useState, useEffect } from "react";
import { FaUsers, FaCalendarAlt, FaCreditCard } from "react-icons/fa";
import { GiTreeBranch } from "react-icons/gi";

const CountUpAnimation = ({
  end,
  duration,
}: {
  end: number;
  duration: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const BusinessReinvent = ({ darkMode }: any) => {
  return (
    <div
      className={`container mx-auto px-4 py-12 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-4">
        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-2 text-start ${darkMode ? "text-lightGrey" : "text-[#4D4D4D]"}`}
          >
            Helping a local
            <br />
            <span className="text-[#4CAF4F] text-start">
              business reinvent itself
            </span>
          </h2>
          <p
            className={`mb-4 text-start md:-ml-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-8">
          <StatItem
            icon={<FaUsers className="text-[#4CAF4F] md:text-4xl" />}
            value={2245341}
            label="Members"
            darkMode={darkMode}
          />
          <StatItem
            icon={<GiTreeBranch className="text-[#4CAF4F] md:text-4xl" />}
            value={46328}
            label="Clubs"
            darkMode={darkMode}
          />
          <StatItem
            icon={<FaCalendarAlt className="text-[#4CAF4F] md:text-4xl" />}
            value={828867}
            label="Event Bookings"
            darkMode={darkMode}
          />
          <StatItem
            icon={<FaCreditCard className="text-[#4CAF4F] md:text-4xl" />}
            value={1926436}
            label="Payments"
            darkMode={darkMode}
          />
        </div>
      </div>
    </div>
  );
};

const StatItem = ({
  icon,
  value,
  label,
  darkMode,
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
  darkMode: boolean;
}) => (
  <div className="flex items-center space-x-2">
    {icon}
    <div>
      <div
        className={`md:text-3xl font-bold ${darkMode ? "text-lightGrey" : "text-[#4D4D4D]"}`}
      >
        <CountUpAnimation end={value} duration={2000} />
      </div>
      <div
        className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
      >
        {label}
      </div>
    </div>
  </div>
);

export default BusinessReinvent;

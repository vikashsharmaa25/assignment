"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaBars, FaTimes } from "react-icons/fa";
import useThemeStore from "../Zustand/themeStore";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Service", href: "#" },
    { name: "Feature", href: "#" },
    { name: "Product", href: "#" },
    { name: "Testimonial", href: "#" },
    { name: "FAQ", href: "#" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);
  const darkMode = useThemeStore((state) => state.darkMode);

  return (
    <div className="flex items-center justify-between h-[84px] px-4 lg:px-10">
      <div>
        <Image
          width={111}
          height={21}
          src="Logo.svg"
          alt="logo"
          className={`w-[160px] p-2 ${!darkMode ? "bg-transparent" : "bg-white"} `}
        />
      </div>
      <div className="hidden lg:flex flex-row gap-10 h-[24px]">
        {navItems.map((item) => (
          <a
            className={darkMode ? "text-white" : "text-black"}
            href={item.href}
            key={item.name}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="hidden lg:flex gap-2">
        <Button className="bg-silver font-normal text-[#4CAF4F] rounded-[6px] hover:text-white hover:bg-[#4CAF4F]">
          Login
        </Button>
        <Button className="bg-[#4CAF4F] rounded-[6px] text-white font-normal hover:bg-[#449c47]">
          Sign Up
        </Button>
        <button onClick={toggleDarkMode}>
          {darkMode ? (
            <CiLight className="text-2xl ml-2 " />
          ) : (
            <MdDarkMode className="text-2xl ml-2 " />
          )}
        </button>
      </div>
      <div className="lg:hidden">
        <Button onClick={toggleMenu} className="bg-transparent text-black">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </Button>
      </div>
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-white transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        ref={menuRef}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <Button
            onClick={toggleMenu}
            className="absolute top-4 right-4 bg-transparent text-black"
          >
            <FaTimes size={24} />
          </Button>
          {navItems.map((item) => (
            <a
              className="text-black text-xl my-2"
              href={item.href}
              key={item.name}
              onClick={toggleMenu}
            >
              {item.name}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-4">
            <Button className="bg-silver font-normal text-[#4CAF4F] rounded-[6px] hover:text-white hover:bg-[#4CAF4F]">
              Login
            </Button>
            <Button className="bg-[#4CAF4F] rounded-[6px] text-white font-normal hover:bg-[#449c47]">
              Sign Up
            </Button>
            <button onClick={toggleDarkMode}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

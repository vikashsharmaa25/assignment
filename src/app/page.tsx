"use client";

import BusinessReinvent from "@/components/sections/achievements";
import Achievements from "@/components/sections/achievements";
import BlogSection from "@/components/sections/BlogSection";
import Clients from "@/components/sections/clients";
import Community from "@/components/sections/community";
import Demo from "@/components/sections/Demo";
import DesginSite from "@/components/sections/DesgineSite";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Testimonial from "@/components/sections/Testimonial";
import Unlock from "@/components/sections/unlock";
import useThemeStore from "@/components/Zustand/themeStore";

export default function Home() {
  const darkMode = useThemeStore((state) => state.darkMode);
  return (
    <>
      <div className={`${darkMode ? "bg-black text-white" : "bg-silver"}`}>
        <div className="max-w-[1440px] mx-auto">
          <div>
            <Header />
          </div>
          <div>
            <Hero darkMode={darkMode} />
          </div>
        </div>
        <div className={`${darkMode ? "bg-black" : "bg-white"} rounded-lg`}>
          <div className="mt-16">
            <Clients darkMode={darkMode} />
          </div>
          <div className="">
            <Community darkMode={darkMode} />
          </div>
          <div className="">
            <Unlock darkMode={darkMode} />
          </div>
        </div>
        <div className={`pt-10 ${!darkMode ? "bg-[#F5F7FA]" : "bg-black"}`}>
          <BusinessReinvent darkMode={darkMode} />
        </div>
        <div className={`${darkMode ? "bg-black" : "bg-white"} mt-10`}>
          <DesginSite darkMode={darkMode} />
        </div>
        <div className={`pt-10 ${!darkMode ? "bg-[#F5F7FA]" : "bg-black"}`}>
          <Testimonial darkMode={darkMode} />
        </div>
        <div className={`${darkMode ? "bg-black" : "bg-white"} mt-10`}>
          <BlogSection darkMode={darkMode} />
        </div>
        <div className={`pt-10 ${!darkMode ? "bg-[#F5F7FA]" : "bg-black"}`}>
          <Demo darkMode={darkMode} />
        </div>
        <div className="bg-[#263238]">
          <Footer />
        </div>
      </div>
    </>
  );
}

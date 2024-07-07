import { clientLogo } from "@/lib/data";
import Image from "next/image";

function Clients({ darkMode }: any) {
  return (
    <div className="flex flex-col justify-center items-center gap-10 sm:gap-16 p-4 sm:p-6 overflow-hidden">
      <div className="flex flex-col items-center gap-3 sm:gap-5 text-center">
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl ${darkMode ? "text-white" : "text-d_Grey"} font-semibold`}
        >
          Our Clients
        </h2>
        <p
          className={`font-light text-sm sm:text-base  max-w-xs sm:max-w-sm md:max-w-md ${darkMode ? "text-white" : "text-slate-500"}`}
        >
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      <div className="w-[1200px] mx-auto overflow-hidden">
        <div className="flex animate-marquee">
          {[...clientLogo, ...clientLogo].map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-[50px] mx-4 sm:mx-8">
              <Image
                src={logo.src}
                width={100}
                height={100}
                alt={logo.name}
                quality={100}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;

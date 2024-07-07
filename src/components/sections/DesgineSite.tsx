import Image from "next/image";
import { Button } from "../ui/button";
import SiteImage from "@/assets/pana.png";

function DesginSite({ darkMode }: any) {
  return (
    <div
      className={`container mx-auto px-4 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <Image
            src={SiteImage}
            width={441}
            height={328}
            alt="DesginSite Image"
            layout="responsive"
            className="w-full h-auto p-10"
          />
        </div>
        <div
          className={`flex flex-col items-center md:items-start gap-4 md:gap-6 max-w-xl ${darkMode ? "text-light" : "text-dark"}`}
        >
          <h2
            className={`text-xl sm:text-2xl md:text-3xl font-semibold text-center md:text-start ${darkMode ? "text-lightGrey" : "text-d_Grey"}`}
          >
            How to design your site footer like we did
          </h2>
          <p
            className={`text-sm sm:text-base font-light text-center md:text-start ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            {`Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.`}
          </p>
          <button className="rounded-[6px] w-fit text-white px-8 py-4 bg-[#4CAF4F]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default DesginSite;

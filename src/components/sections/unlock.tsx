import Image from "next/image";
import { Button } from "../ui/button";

function Unlock({ darkMode }: any) {
  return (
    <div
      className={`container mx-auto px-4 ${darkMode ? "bg-dark" : "bg-light"}`}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <Image
            src="/unlock.svg"
            width={441}
            height={328}
            alt="unlock Image"
            layout="responsive"
            className="w-full h-auto"
          />
        </div>
        <div
          className={`flex flex-col items-center md:items-start gap-4 md:gap-6 max-w-xl ${darkMode ? "text-light" : "text-dark"}`}
        >
          <h2
            className={`text-xl sm:text-2xl md:text-3xl font-semibold text-center md:text-start ${darkMode ? "text-lightGrey" : "text-d_Grey"}`}
          >
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="text-sm sm:text-base font-light text-center md:text-start">
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.`}
          </p>
          <button className="rounded-[6px] w-fit text-white px-8 py-4 bg-[#4CAF4F]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Unlock;

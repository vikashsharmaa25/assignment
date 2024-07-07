import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Demo({ darkMode }: any) {
  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <div className="">
        <h1 className="lg:text-7xl md:text-4xl text-xl  text-center font-bold w-[80%] mx-auto text-[#263238]">
          Pellentesque suscipit fringilla libero eu.
        </h1>
      </div>
      <div className="flex justify-center items-center my-8">
        <button className="w-[178px] h-[52px] bg-[#4CAF4F] text-white rounded-[6px] flex items-center gap-2 justify-center">
          Get a Demo{" "}
          <span>
            <FaArrowRightLong />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Demo;

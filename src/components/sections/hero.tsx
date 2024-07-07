"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function Hero({ darkMode }: any) {
  const heroItems = [
    {
      title: "Lessons and insights",
      subtitle: "from 8 years",
      description:
        "Where to grow your business as a photographer: site or social media?",
      buttonText: "Register",
      imageSrc: "/heroImg.png",
      imageAlt: "Hero Image",
    },
    {
      title: "Lessons and insights",
      subtitle: "from 8 years",
      description:
        "Where to grow your business as a photographer: site or social media?",
      buttonText: "Register",
      imageSrc: "/heroImg.png",
      imageAlt: "Hero Image",
    },
    {
      title: "Lessons and insights",
      subtitle: "from 8 years",
      description:
        "Where to grow your business as a photographer: site or social media?",
      buttonText: "Register",
      imageSrc: "/heroImg.png",
      imageAlt: "Hero Image",
    },
    // Add more items as needed
  ];

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <div className=" flex flex-col items-center overflow-hidden w-full">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full"
        >
          <CarouselContent>
            {heroItems.map((item, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col md:flex-row py-6 md:py-10 justify-center items-center gap-6 md:gap-10 overflow-hidden px-4 md:px-8 lg:px-10">
                  <div className="flex justify-center w-full md:w-[60%] text-center md:text-left">
                    <div className="flex flex-col justify-center items-center gap-3 md:gap-5 w-full">
                      <div>
                        <h1
                          className={`font-bold text-3xl md:text-4xl lg:text-6xl  ${darkMode ? "text-white" : "text-d_Grey"} tracking-wide`}
                        >
                          {item.title}
                        </h1>
                        <p className="text-[#4CAF4F] text-2xl md:text-3xl lg:text-5xl font-bold my-4 tracking-wide">
                          {item.subtitle}
                        </p>
                        <p className="font-light text-sm md:text-base text-slate-500">
                          {item.description}
                        </p>
                        <button className="text-white rounded-[6px] mx-auto md:mx-0 bg-[#4CAF4F] sm:h-[52px] h-[28px] sm:w-[128px] w-[100px] mt-5">
                          {item.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center w-full md:w-[40%] ">
                    <div className="w-full max-w-[391px] h-auto aspect-[391/407]">
                      <Image
                        src={item.imageSrc}
                        width={391}
                        height={407}
                        alt={item.imageAlt}
                        className="w-full h-full object-fill"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="hidden md:flex" />
          <CarouselPrevious className="hidden md:flex" />
        </Carousel>
      </div>
      <div className="flex justify-center p-4">
        <div className="flex space-x-2">
          {heroItems.map((_, index) => (
            <span
              key={index}
              className={cn(
                "block h-2 w-2 rounded-full bg-green-200",
                current === index + 1 && "bg-primary"
              )}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Hero;

import React from "react";
import { AiOutlineMobile } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import TypeWriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <div id="herosection">
      <div className="w-full h-full bg-gradient-to-r from-purple dark:from-rhino-light to-purple-dark dark:to-rhino-dark">
        <div className="px-2 pt-16 pb-8 items-center space-y-10 md:flex md:justify-between md:space-y-0 md:px-12 md:py-28 lg:px-32 lg:py-32 xl:px-56 3xl:px-0 3xl:pb-96 3xl:max-w-7xl 3xl:mx-auto 3xl:min-h-screen">
          <div className="space-y-8 xl:space-y-10">
            <div className="flex items-center space-x-2 justify-center lg:space-x-4 xl:justify-start">
              <h1 className="text-cursed-black dark:text-creator-light font-bold text-xl md:text-2xl lg:text-3xl xl:text-5xl 3xl:text-6xl">
                Hi
              </h1>
              <img
                className="w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 animate-handwiggle"
                src="/assets/waving-hand-svgrepo-com.svg"
                alt="handwave"
              />
            </div>
            <h1 className="text-center text-creator-light dark:text-cursed-black font-bold text-xl md:text-2xl lg:text-3xl xl:text-start xl:text-3xl 3xl:text-4xl">
              <TypeWriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("I'm ")
                    .pauseFor(1000)
                    .typeString("Htoo Htet Aung")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Love to code!")
                    .pauseFor(3000)
                    .start();
                }}
              />
            </h1>
            <div className="flex items-center justify-center space-x-4 md:justify-between md:space-x-5">
              <div className="flex items-center text-cursed-black space-x-1 dark:text-creator-light lg:space-x-2">
                <BiWorld className="w-5 h-5 md:w-6 md:h-6 3xl:w-7 3xl:h-7" />
                <p className="text-sm md:text-lg">Web developer</p>
              </div>
              <div className="flex items-center text-cursed-black space-x-1 dark:text-creator-light lg:space-x-2">
                <AiOutlineMobile className="w-5 h-5 md:w-6 md:h-6 3xl:w-7 3xl:h-7" />
                <p className="text-sm md:text-lg">App developer</p>
              </div>
            </div>
          </div>
          <img
            src="/assets/astronaut.svg"
            className="w-72 h-72 animate-up mx-auto mt-4 md:w-80 md:h-80 md:mx-0 md:mt-0 lg:w-5/12 lg:h-5/12 3xl:96 3xl:h-96"
            alt="astronaut"
          />
        </div>
      </div>

      <div className="w-full h-24 skew-y-6 transform -mt-10 bg-gradient-to-r from-purple dark:from-rhino-light to-purple-dark dark:to-rhino-dark md:h-40 md:-mt-20 xl:hidden"></div>
    </div>
  )
}

export default HeroSection